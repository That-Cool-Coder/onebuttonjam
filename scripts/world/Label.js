class Label extends wrk.GameEngine.Label {
    directionToAngle = {
        'up' : wrk.PI,
        'right' : wrk.PI * 1.5,
        'left' : wrk.PI / 2,
        'down' : 0
    }

    lightFormat = {fontSize : 18, fill : 0xffffff, align : 'center'};
    darkFormat = {fontSize : 18, fill : 0x000000, align : 'center'};

    /** Like an EnvironmentItem but it is text. */
    constructor(text, localPosition, direction, light=true) {
        super(text, text, localPosition, 0, {});
        
        this.type = 'label';
        this.walkable = false;
        this.setDirection(direction);
        if (light) this.setTextFormat(this.lightFormat);
        else this.setTextFormat(this.darkFormat);
    }

    setDirection(direction) {
        this.direction = direction;
        this.setLocalAngle(this.directionToAngle[direction]);
    }
}