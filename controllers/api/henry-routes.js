// Dependencies
const router = require('express').Router();
const { Post, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { route } = require('..');


app.get()