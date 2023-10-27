'use strict'

const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const snap = document.getElementById('snap')
const errorMsgElement = document.getElementById('span#ErrorMsg')

const constraints = {
    video: {
        width:350,
        height:571
    }
};
