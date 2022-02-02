import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Banner from '../asset/Banner.jpg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';