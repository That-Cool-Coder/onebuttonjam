import simpleFileManager as files
import json
from math import pi

ROCK_WALL_COLOR = [270, 1, 0.6, 1]
WALL_COLOR = [0, 0, 0.6, 1]
START_POS_COLOR = [221.38263, 0.71006507, 0.98478514, 1]
LEVEL_END_COLOR = [240, 1, 0.83333331, 1.0000000]
SPIKE_COLOR = [0, 1, 1, 1]
PORTAL_COLOR = [120, 1, 1, 1]

DIRECTION_TABLE = {}

def loadLevel(levelPath, outputFile, header='{'):
    # levelPath should be a .phn file exported from algodoo

    rawFile = files.read(levelPath)
    items = rawFile.split('\n};')

    startPos = 'playerStartPosition : wrk.v(0, 0)'

    nonRockWalls = []
    rockWalls = []

    for item in items:
        item = item.strip()
        if itemIsEntity(item):
            result = loadItem(item)
            if result is not None:
                if 'startpos' not in result:
                    if 'rockWall' in result:
                        rockWalls.append(result)
                    else:
                        nonRockWalls.append(result)
                else:
                    startPos = result.split('^')[1]
    
    body = ''
    partList = rockWalls.copy()
    partList.extend(nonRockWalls)

    for part in partList:
        body += part + ',\n'

    finalResult = \
f'''{header}
    {startPos},
    environmentItems : [
{body}
    ]
}}'''

    files.write(outputFile, finalResult)

def itemIsEntity(item):
    if '->' in item:
        return False
    return item.split(' ')[0] == 'Scene.addBox'
    
def loadItem(item):
    itemDict = makeItemDict(item)

    if colorsMatch(itemDict['colorHSVA'], ROCK_WALL_COLOR):
        return loadRockWall(itemDict)
    elif colorsMatch(itemDict['colorHSVA'], WALL_COLOR):
        return loadWall(itemDict)
    elif colorsMatch(itemDict['colorHSVA'], START_POS_COLOR):
        return loadStartPos(itemDict)
    elif colorsMatch(itemDict['colorHSVA'], LEVEL_END_COLOR):
        return loadLevelEnd(itemDict)
    elif colorsMatch(itemDict['colorHSVA'], SPIKE_COLOR):
        return loadSpike(itemDict)
    elif colorsMatch(itemDict['colorHSVA'], PORTAL_COLOR):
        return loadPortal(itemDict)
    else:
        return None
    
def makeItemDict(item):
    itemDict = {}
    sections = item.split('\n')
    for section in sections:
        if ':=' in section:
            keyAndValue = section.split(':=')
            value = keyAndValue[1].strip()
            value = value.replace(';', '')
            itemDict[keyAndValue[0].strip()] = value
    return itemDict

def colorsMatch(stringColor, color2):
    elipson = 0.01
    matches = True
    
    stringColor = removeSquareBrackets(stringColor)
    color1 = stringColor.split(',')
    
    for i in range(len(color1)):
        if -elipson < float(color1[i]) - float(color2[i]) < elipson:
            a = 5 # do nothing
        else:
            matches = False
            break
    return matches

def removeSquareBrackets(string):
    string = string.replace('[', '')
    string = string.replace(']', '')
    return string

def loadPosition(itemDict):
    position = removeSquareBrackets(itemDict['pos']).split(', ')
    position[0] = round(float(position[0]) * 100)
    position[1] = round(float(position[1]) * 100) * -1
    return position

def loadSize(itemDict):
    size = removeSquareBrackets(itemDict['size']).split(', ')
    size[0] = round(float(size[0]) * 100)
    size[1] = round(float(size[1]) * 100)
    return size

def loadAngle(itemDict):
    angle = round(float(itemDict['angle']) % (pi * 2), 3)
    return angle


def loadDirection(itemDict):
    angle = loadAngle(itemDict)
    if angle == 0:
        return "'up'"
    elif angle == round(pi / 2, 3):
        return "'right'"
    elif angle == round(pi, 3):
        return "'down'"
    else:
        return "'left'"

def loadDirectionAndRealSize(itemDict, xLarger):
    angle = loadAngle(itemDict)
    size = loadSize(itemDict)
    if angle == 0 or angle == round(pi, 3):
        realSize = [size[0], size[1]]
    else:
        realSize = [size[1], size[0]]
    
    if xLarger:
        if realSize[0] >= realSize[1]:
            return "'up'", [size[0], size[1]]
        else:
            return "'right'", [size[1], size[0]]
    else:
        if realSize[0] >= realSize[1]:
            return "'right'", realSize
        else:
            return "'up'", realSize

def loadText(itemDict):
    text = itemDict['text']
    return text

def loadRockWall(itemDict):
    position = loadPosition(itemDict)
    direction, realSize = loadDirectionAndRealSize(itemDict, True)
    result = \
f'''        {{
            type : 'rockWall',
            position : wrk.v({position[0]}, {position[1]}),
            size : wrk.v({realSize[0]}, {realSize[1]}),
            direction : {direction}
        }}'''
    return result

def loadWall(itemDict):
    position = loadPosition(itemDict)
    direction, realSize = loadDirectionAndRealSize(itemDict, True)
    result = \
f'''        {{
            type : 'wall',
            position : wrk.v({position[0]}, {position[1]}),
            size : wrk.v({realSize[0]}, {realSize[1]}),
            direction : {direction}
        }}'''
    return result

def loadStartPos(itemDict):
    position = loadPosition(itemDict)
    result = f'startpos^playerStartPosition : wrk.v({position[0]}, {position[1]})'
    return result

def loadLevelEnd(itemDict):
    position = loadPosition(itemDict)
    direction, realSize = loadDirectionAndRealSize(itemDict, False)
    result = \
f'''        {{
            type : 'levelEnd',
            position : wrk.v({position[0]}, {position[1]}),
            direction : {direction}
        }}'''
    return result

def loadSpike(itemDict):
    position = loadPosition(itemDict)
    size = loadSize(itemDict)
    direction = loadDirection(itemDict)
    result = \
f'''        {{
            type : 'spike',
            position : wrk.v({position[0]}, {position[1]}),
            direction : {direction}
        }}'''
    return result

def loadPortal(itemDict):
    position = loadPosition(itemDict)
    direction, realSize = loadDirectionAndRealSize(itemDict, False)
    color = loadText(itemDict)
    result = \
f'''        {{
            type : 'portal',
            position : wrk.v({position[0]}, {position[1]}),
            direction : {direction},
            color : {color}
        }}'''
    return result

if __name__ == '__main__':
    levelNumber = input('Enter level number: ')
    filename = 'algodoolevels/' + levelNumber + '.phn'
    header = files.read('headers/' + levelNumber + '.txt')
    loadLevel(filename, 'level' + levelNumber + '.js', header=header)
