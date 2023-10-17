import React from 'react';
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from '@babylonjs/core'
import '@babylonjs/loaders'
import Credits from '../Credits'
import './BabylonInc.css'


const BabylonInc = (props) => {

    const mainCanvas = async function main(scene) {
        const canvas = scene.getEngine().getRenderingCanvas()

        // Creates, angles, distances and targets the camera
        const camera = new ArcRotateCamera("main-camera",
            0, // alpha
            0, // beta
            10, // radius
            new Vector3(0, 0, 0), // target position
            scene)

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true)

        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        // Our built-in 'ground' shape.
        const ground = MeshBuilder.CreateGround("ground", { width: 0.2, height: 0.2 }, scene)
        ground.position.y = 0
        // İmport Model File
        const test = await SceneLoader.ImportMeshAsync("",
            "https://raw.githubusercontent.com/justmucahid/gh-pages-website/main/src/assets/",
            "main.gltf",
            scene, function () {

                scene.createDefaultCameraOrLight(true, true, true);
                // scene.createDefaultEnvironment();
                scene.activeCamera.alpha = 0
                scene.activeCamera.beta = 1.5
                scene.activeCamera.radius = 0.18

                scene.activeCamera.target.x = 0
                scene.activeCamera.target.y = 0.04
                scene.activeCamera.target.z = 0

                // scene.stopAllAnimations();

            })
            console.log(test);

        const pCube1 = test.meshes[1]
        pCube1.setParent(null);
        test.meshes[0].dispose();

        pCube1.scaling = new Vector3(0.06, 0.06, 0.06)
        pCube1.position.y = 0.04
        pCube1.rotation = new Vector3(0, 0.45, 0)
        pCube1.morphTargetManager.getTarget(0).influence = 0.75

        scene.registerBeforeRender(() => {
            camera.alpha += 0.01;
            camera.radius += 0.02
        })
    }
    return (
        <Credits onSceneReady={mainCanvas}{...props} id='logo-canvas' />
    )
}

export default BabylonInc