class EnvironmentItem extends wrk.GameEngine.DrawableEntity {
    directionToAngle = {
        'up' : wrk.PI,
        'right' : wrk.PI * 1.5,
        'left' : wrk.PI / 2,
        'down' : 0
    }

    /** A rectangular component that makes up the world such as wall, portal
     * LocalDirection is 'up', 'right', 'down', 'left'
    */
    constructor(name, type, localPosition, localDirection, colliderSize,
        texture, textureSize, isWalkable) {
        super(name, localPosition, 0, texture, textureSize);

        this.type = type;
        this.setDirection(localDirection);
        this.setColliderSize(colliderSize);
        this.isWalkable = isWalkable;
    }

    setDirection(direction) {
        this.direction = direction;
        this.setLocalAngle(this.directionToAngle[direction]);
    }

    setColliderSize(colliderSize) {
        this.colliderSize = colliderSize;
        this.halfColliderSize = wrk.v.copyDiv(this.colliderSize, 2)
    }
    get topLeftPos() {
        // The top left position refers to the part of the item that is...
        // ... the furthest to the top left, not where the original top left corner...
        // ... has rotated to

        switch(this.direction) {
            case 'up':
                return wrk.v.copySub(this.globalPosition, this.halfColliderSize);
            case 'right':
                var offset = wrk.v(this.halfColliderSize.y, this.halfColliderSize.x);
                return wrk.v.copySub(this.globalPosition, offset);
            case 'down':
                return wrk.v.copySub(this.globalPosition, this.halfColliderSize);
            case 'left':
                var offset = wrk.v(this.halfColliderSize.y, this.halfColliderSize.x);
                return wrk.v.copySub(this.globalPosition, offset);
        }
    }

    get bottomRightPos() {
        // The bottom right position refers to the part of the item that is...
        // ... the furthest to the bottom right, not where the original bottom right corner...
        // ... has rotated to

        switch(this.direction) {
            case 'up':
                return wrk.v.copyAdd(this.globalPosition, this.halfColliderSize);
            case 'right':
                var offset = wrk.v(this.halfColliderSize.y, this.halfColliderSize.x);
                return wrk.v.copyAdd(this.globalPosition, offset);
            case 'down':
                return wrk.v.copyAdd(this.globalPosition, this.halfColliderSize);
            case 'left':
                var offset = wrk.v(this.halfColliderSize.y, this.halfColliderSize.x);
                return wrk.v.copyAdd(this.globalPosition, offset);
        }
    }

    isTouching(component) {
        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var selfBottomRight = this.bottomRightPos;
        var otherTopLeft = component.topLeftPos;
        var otherBottomRight = component.bottomRightPos;
        
        return rectRectCollision(selfTopLeft, selfBottomRight, otherTopLeft, otherBottomRight);
    }

    collisionSide(component) {
        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var componentTopLeft = component.topLeftPos;

        var selfSize = wrk.v.copyMult(this.colliderSize, 2);
        var componentSize = wrk.v.copyMult(component.colliderSize, 2);

        return rectRectCollisionSide(selfTopLeft, selfSize, componentTopLeft, componentSize);
    }
}