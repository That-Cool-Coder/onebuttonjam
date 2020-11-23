// The highest level that the person has unlocked
const progressSaveKey = 'oneButtonJamHighestLevelUnlocked';

if (localStorage.getItem(progressSaveKey) == undefined) {
    resetProgress();
}

function getHighestLevelUnlocked() {
    return localStorage.getItem(progressSaveKey);
}

function setHighestLevelUnlocked(levelNumber) {
    localStorage.setItem(progressSaveKey, levelNumber)
}

function resetProgress() {
    setHighestLevelUnlocked('0');
}

function unlockNextLevel() {
    var crntLevelNum = playScreen.crntLevel.number;
    var previousHighestLevelUnlocked = getHighestLevelUnlocked();
    if (crntLevelNum == previousHighestLevelUnlocked) {
        setHighestLevelUnlocked(crntLevelNum + 1);
    }
}