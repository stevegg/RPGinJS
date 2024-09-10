import * as THREE from 'three';

export class World extends THREE.Group {

    width: number = 64;
    height: number = 10;

    constructor( width: number = 64, height: number = 10) {
        super();
        this.width = width;
        this.height = height;

        this.rotation.x = -Math.PI / 2.0

        this.createTerrain();
    }

    createTerrain = () => {
        const planeGeometry = new THREE.PlaneGeometry(this.width, this.width, this.width, this.width);
        const planeMaterial = new THREE.MeshBasicMaterial({color: 0x355E3B });
        
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        this.add(planeMesh);
    }
}