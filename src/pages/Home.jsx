import React from 'react'
import MetaData from '../components/MetaData'
import me from '../assets/authro.png'

import { FaReact, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <>
   <MetaData title={"Home Page"}/>
   <div className="flex items-center justify-center h-[90vh]">
    <div className=" p-8 rounded-lg">
        <div className=" mx-auto w-[70%] text-center">
            <img src={me} alt="Sample Image" className="rounded-[50px] mx-auto mb-2 w-[100px] h-[100px]"/>
            <p className="text-xl mb-2">Hi, I'm Ali Hassan</p>
            <div>
                <h1 className="md:text-3xl font-bold ">Showcase Yourself Crafting a <br/>Static and  Dynamic Websites.</h1>
            </div>
            <div className="mt-4">
                <p className="text-gray-700 mb-5 text-sm">Thank you for visiting! I'm excited about the opportunity to make new projects. Feel free to mention a call-to-action, such as exploring my work, reaching out for collaborations, or getting in touch.</p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded"> <Link to='/portfolio'>Views Projects</Link></button>
            </div>
            <div className="flex flex-col justify-center mt-6 items-center gap-2">
                <h3 className='font-bold text-2xl'>Tech Stack:</h3>
         <div className='flex gap-3'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
<path fill="#f59173" d="M83.105,15H16.895l5.842,66.211L50,89l27.263-7.789L83.105,15L83.105,15z"></path><path fill="#1f212b" d="M50,90c-0.093,0-0.185-0.013-0.274-0.039l-27.263-7.79c-0.398-0.114-0.686-0.461-0.722-0.874	l-5.843-66.21c-0.024-0.279,0.069-0.556,0.259-0.763S16.614,14,16.895,14h66.211c0.28,0,0.548,0.118,0.737,0.325	s0.283,0.484,0.259,0.763l-5.843,66.21c-0.036,0.413-0.323,0.76-0.722,0.874l-27.263,7.79C50.185,89.987,50.093,90,50,90z M23.673,80.438L50,87.96l26.327-7.522L82.014,16H17.986L23.673,80.438z"></path><polygon fill="#e85654" points="50,20.5 50,82.963 71.811,76.732 76.709,20.5"></polygon><polygon fill="#fefdef" points="50,30.579 49,34.474 50,38.368 67.332,38.368 67.916,30.579"></polygon><polygon fill="#fefdef" points="50,53.947 58.568,53.947 57.984,62.711 50,65.437 49,69 50,73.616 65.384,68.553 66.747,46.158 50,46.158 49,50"></polygon><path fill="#eeecd9" d="M50,65.437v8.179l-15.384-5.063l-0.779-10.711h7.789l0.389,4.868L50,65.437z M40.458,38.368H50	v-7.789H32.279l1.363,23.368H50v-7.789h-8.958L40.458,38.368z"></path><path fill="#1f212b" d="M67.576,78.441c-0.218,0-0.418-0.143-0.48-0.363c-0.076-0.265,0.077-0.542,0.343-0.618l3.904-1.115	L76.163,21H50.5v3.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5h26.709	c0.141,0,0.273,0.059,0.368,0.162s0.143,0.242,0.13,0.381l-4.898,56.231c-0.018,0.207-0.161,0.38-0.36,0.438l-4.234,1.21	C67.668,78.435,67.621,78.441,67.576,78.441z"></path><path fill="#1f212b" d="M62.537,79.881c-0.218,0-0.418-0.143-0.48-0.363c-0.076-0.266,0.078-0.542,0.343-0.618l1.994-0.569	c0.268-0.074,0.542,0.079,0.618,0.344c0.076,0.266-0.078,0.542-0.343,0.618l-1.994,0.569C62.629,79.875,62.582,79.881,62.537,79.881	z"></path><path fill="#1f212b" d="M50,83.463c-0.107,0-0.213-0.035-0.301-0.101c-0.126-0.095-0.199-0.243-0.199-0.399v-9.348	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V82.3l8.81-2.517c0.267-0.074,0.543,0.079,0.618,0.344	c0.076,0.265-0.077,0.542-0.343,0.618l-9.447,2.699C50.092,83.457,50.046,83.463,50,83.463z"></path><path fill="#1f212b" d="M50,65.937c-0.276,0-0.5-0.224-0.5-0.5v-8.49c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v8.49	C50.5,65.713,50.276,65.937,50,65.937z"></path><path fill="#1f212b" d="M50,46.658c-0.276,0-0.5-0.224-0.5-0.5v-4.789c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.789	C50.5,46.434,50.276,46.658,50,46.658z"></path><path fill="#1f212b" d="M50,74.116c-0.053,0-0.105-0.008-0.156-0.025L34.46,69.028c-0.192-0.063-0.328-0.237-0.343-0.439	l-0.779-10.71c-0.01-0.138,0.038-0.275,0.133-0.376c0.095-0.102,0.228-0.16,0.366-0.16h7.789c0.261,0,0.478,0.2,0.498,0.46	l0.364,4.541L50,64.909l7.508-2.564l0.526-7.897H33.643c-0.265,0-0.483-0.207-0.499-0.471L31.78,30.608	c-0.008-0.138,0.041-0.272,0.136-0.373c0.094-0.1,0.226-0.157,0.363-0.157h35.637c0.139,0,0.271,0.058,0.366,0.16	c0.095,0.102,0.143,0.238,0.133,0.377l-0.584,7.79c-0.02,0.261-0.237,0.462-0.499,0.462H40.997l0.509,6.789h25.241	c0.138,0,0.27,0.057,0.364,0.157c0.095,0.101,0.144,0.235,0.135,0.373l-1.363,22.395c-0.013,0.205-0.148,0.381-0.343,0.445	l-15.384,5.063C50.105,74.107,50.053,74.116,50,74.116z M35.091,68.183L50,73.089l14.905-4.906l1.311-21.526H41.042	c-0.262,0-0.479-0.202-0.499-0.462l-0.584-7.789c-0.01-0.139,0.038-0.276,0.133-0.377c0.095-0.102,0.228-0.16,0.366-0.16h26.41	l0.509-6.79H32.81l1.305,22.368h24.454c0.139,0,0.271,0.057,0.365,0.158s0.143,0.237,0.134,0.375l-0.584,8.763	c-0.014,0.201-0.146,0.375-0.338,0.44l-7.984,2.727c-0.104,0.036-0.219,0.036-0.322,0l-7.984-2.727	c-0.189-0.064-0.321-0.234-0.337-0.433l-0.354-4.408h-6.789L35.091,68.183z"></path><path fill="#1f212b" d="M50,30.9c-0.276,0-0.5-0.224-0.5-0.5v-2.9c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2.9	C50.5,30.676,50.276,30.9,50,30.9z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
<path fill="#3070b7" d="M83.105,15H16.895l5.842,66.211L50,89l27.263-7.789L83.105,15L83.105,15z"></path><path fill="#1f212b" d="M50,90c-0.093,0-0.185-0.013-0.274-0.039l-27.263-7.79c-0.398-0.114-0.686-0.461-0.722-0.874	l-5.843-66.21c-0.024-0.279,0.069-0.556,0.259-0.763S16.614,14,16.895,14h66.211c0.28,0,0.548,0.118,0.737,0.325	s0.283,0.484,0.259,0.763l-5.843,66.21c-0.036,0.413-0.323,0.76-0.722,0.874l-27.263,7.79C50.185,89.987,50.093,90,50,90z M23.673,80.438L50,87.96l26.327-7.522L82.014,16H17.986L23.673,80.438z"></path><polygon fill="#09ace3" points="50,20.5 50,82.963 71.811,76.732 76.709,20.5"></polygon><polygon fill="#fefdef" points="67.721,30.579 50,30.579 49,34 50,38.368 59.542,38.368 58.958,46.158 50,46.158 49,50 50,53.947 58.568,53.947 57.984,62.711 50,65.437 49,70 50,73.616 65.384,68.553 66.747,46.158 66.747,46.158"></polygon><path fill="#eeecd9" d="M50,30.579v7.789H32.668l-0.584-7.789H50z M41.042,46.158l0.389,7.789H50v-7.789H41.042z M41.821,57.842h-7.789l0.584,10.711L50,73.616v-8.179l-7.984-2.726L41.821,57.842z"></path><path fill="#1f212b" d="M50,31.079c-0.276,0-0.5-0.224-0.5-0.5V20.5c0-0.276,0.224-0.5,0.5-0.5h3.5	c0.276,0,0.5,0.224,0.5,0.5S53.776,21,53.5,21h-3v9.579C50.5,30.855,50.276,31.079,50,31.079z"></path><path fill="#1f212b" d="M60.5,21h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5	S60.776,21,60.5,21z"></path><path fill="#1f212b" d="M50,83.463c-0.107,0-0.213-0.035-0.301-0.101c-0.126-0.095-0.199-0.243-0.199-0.399V76.5	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.8l20.843-5.955L76.163,21H63.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5	h13.209c0.141,0,0.273,0.059,0.368,0.162s0.143,0.242,0.13,0.381l-4.898,56.231c-0.018,0.207-0.161,0.38-0.36,0.438l-21.811,6.232	C50.092,83.457,50.046,83.463,50,83.463z"></path><path fill="#1f212b" d="M50,65.937c-0.276,0-0.5-0.224-0.5-0.5v-8.49c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v8.49	C50.5,65.713,50.276,65.937,50,65.937z"></path><path fill="#1f212b" d="M50,46.658c-0.276,0-0.5-0.224-0.5-0.5v-4.789c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.789	C50.5,46.434,50.276,46.658,50,46.658z"></path><path fill="#1f212b" d="M50,74.116c-0.053,0-0.105-0.008-0.156-0.025L34.46,69.028c-0.195-0.064-0.332-0.242-0.343-0.448	l-0.585-10.71c-0.008-0.137,0.042-0.271,0.136-0.371c0.095-0.1,0.226-0.156,0.363-0.156h7.79c0.269,0,0.489,0.212,0.5,0.48	l0.181,4.526L50,64.909l7.508-2.564l0.526-7.897H41.432c-0.267,0-0.486-0.209-0.499-0.475l-0.39-7.79	c-0.007-0.137,0.042-0.271,0.137-0.37s0.226-0.155,0.362-0.155h17.452l0.509-6.789H32.668c-0.262,0-0.479-0.202-0.499-0.462	l-0.584-7.79c-0.01-0.139,0.038-0.276,0.133-0.377c0.095-0.102,0.228-0.16,0.366-0.16h35.637c0.138,0,0.27,0.057,0.364,0.158	s0.144,0.236,0.135,0.374l-2.337,37.973c-0.013,0.205-0.148,0.381-0.343,0.445l-15.384,5.063C50.105,74.107,50.053,74.116,50,74.116	z M35.097,68.185L50,73.089l14.905-4.906l2.283-37.104H32.623l0.509,6.79h26.41c0.139,0,0.271,0.058,0.366,0.16	c0.095,0.102,0.143,0.238,0.133,0.377l-0.584,7.789c-0.02,0.261-0.237,0.462-0.499,0.462H41.567l0.34,6.79h16.661	c0.139,0,0.271,0.057,0.365,0.158s0.143,0.237,0.134,0.375l-0.584,8.763c-0.014,0.201-0.146,0.375-0.338,0.44l-7.984,2.727	c-0.104,0.036-0.219,0.036-0.322,0l-7.984-2.727c-0.196-0.067-0.33-0.247-0.339-0.453l-0.175-4.388H34.56L35.097,68.185z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="7" fill="#39c1d7"></circle><path fill="#1f212b" d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"></path><path fill="#39c1d7" d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"></path><path fill="#1f212b" d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
</svg>
         </div>
<div className='flex gap-3'>

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
</svg>

</div>
</div>


        </div>
    </div>
</div>


</>
  )
}
export default Home