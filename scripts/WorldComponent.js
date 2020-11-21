class WorldComponent extends wrk.GameEngine.DrawableEntity {
    /** A rectangular component that makes up the world such as wall, portal
     * Can only be at 90 degree angles.
    */
    constructor(name, type, localPosition, localAngle, colliderSize, texture, textureSize) {
        super(name, localPosition, localAngle, texture, textureSize);

        this.type = type;

        this.setColliderSize(colliderSize);
    }

    setColliderSize(colliderSize) {
        this.colliderSize = colliderSize;
        this.halfColliderSize = wrk.v.copyDiv(this.colliderSize, 2)
    }

    get topLeftPos() {
        return wrk.v.copySub(this.globalPosition, this.halfColliderSize);
    }

    get bottomRightPos() {
        return wrk.v.copyAdd(this.globalPosition, this.halfColliderSize);
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