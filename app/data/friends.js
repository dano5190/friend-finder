var express = require("express");
var app = express();

var friendlist = [
    {
        "name": "Joe",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Lara",
        "photo": "https://cdn3-www.playstationlifestyle.net/assets/uploads/2018/09/Shadow-of-the-Tomb-Raider-Lara-Croft.jpg",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }
];

module.exports = friendlist;