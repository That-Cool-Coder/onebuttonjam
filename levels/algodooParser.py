import simpleFileManager as files
import json
from math import pi

ROCK_WALL_COLOR = [270, 1, 0.6, 1]
WALL_COLOR = [0, 0, 0.6, 1]
START_POS_COLOR = [221.38263, 0.71006507, 0.98478514, 1]
LEVEL_END_COLOR = [240, 1, 0.83333331, 1.0000000]
SPIKE_COLOR = [0, 1, 1, 1]

DIRECTION_TABLE = {}

def loadLevel(levelPath, outputFile):
    # levelPath should be a .phn file exported from algodoo

    rawFile = files.read(levelPath)
    items = rawFile.split('\n};')

    body = ''

    startPos = 'playerStartPosition : wrk.v(0, 0)'

    for item in items:
        item = item.strip()
        if itemIsEntity(item):
            result = loadItem(item)
            if result is not None:
                if 'startpos' not in result:
                    body += result + ',\n'
                else:
                    startPos = result.split('^')[1]

    finalResult = \
f'''{{
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

def loadDirection(itemDict, xLarger):
    angle = round(float(itemDict['angle']) % (pi * 2), 3)
    size = loadSize(itemDict)
    if angle == 0 or angle == round(pi, 3):
        realSize = [size[0], size[1]]
    else:
        realSize = [size[1], size[0]]
    
    if xLarger:
        if realSize[0] >= realSize[1]:
            return "'up'"
        else:
            return "'right'"
    else:
        if realSize[0] >= realSize[1]:
            return "'right'"
        else:
            return "'up'"

def loadRockWall(itemDict):
    position = loadPosition(itemDict)
    size = loadSize(itemDict)
    direction = loadDirection(itemDict, True)
    result = \
f'''        {{
            type : 'rockWall',
            position : wrk.v({position[0]}, {position[1]}),
            size : wrk.v({size[0]}, {size[1]}),
            direction : {direction}
        }}'''
    return result

def loadWall(itemDict):
    position = loadPosition(itemDict)
    size = loadSize(itemDict)
    direction = loadDirection(itemDict, True)
    result = \
f'''        {{
            type : 'wall',
            position : wrk.v({position[0]}, {position[1]}),
            size : wrk.v({size[0]}, {size[1]}),
            direction : {direction}
        }}'''
    return result

def loadStartPos(itemDict):
    position = loadPosition(itemDict)
    result = f'startpos^playerStartPosition : wrk.v({position[0]}, {position[1]})'
    return result

def loadLevelEnd(itemDict):
    position = loadPosition(itemDict)
    direction = loadDirection(itemDict, False)
    result = \
f'''        {{
            type : 'levelEnd',
            position : wrk.v({position[0]}, {position[1]}),
            direction : {direction}
        }}'''
    return result

def loadSpike(itemDict):
    position = loadPosition(itemDict)
    direction = loadDirection(itemDict, True)
    result = \
f'''        {{
            type : 'spike',
            position : wrk.v({position[0]}, {position[1]}),
            direction : {direction}
        }}'''
    return result

if __name__ == '__main__':
    #filename = input('Enter name of .phn to parse: ')
    filename = 'scene.phn'
    loadLevel(filename, 'test.txt')
