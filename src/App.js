import React, {useState,useRef,useEffect} from 'react'
import Codegen from './Codegen.js';
import logo from './Assets/logo.svg';
import logo4k from './Assets/logo4k.png';
import lets from './Assets/lets.svg';
import phone from './Assets/phone.svg';
import globe from './Assets/globe.svg';
import gico from './Assets/gico.svg';
import wallet from './Assets/wallethome.svg';
import topt from './Assets/topt.svg';
import spline from './Assets/spline.svg';
import virus from './Assets/Virus.svg';
import apple from './Assets/apple.svg';
import googlelogo from './Assets/google-log.svg';
import './App.css';
import Gvt from './Assets/Gvt_2.mp4';
import loading from './Assets/loading.svg';
import io from "socket.io-client";
import $ from "jquery";
import WaterWave from 'react-water-wave';


const socket = io("http://192.168.0.4:2000"
,{ headers: {  "user-agent": "Custom Ws Client" }}
  )
  
function App() {
$("#bck").ripples({ imageUrl:logo4k })
  
const [code, setcode] = useState("")
  const [screen, setscreen] = useState(1)
  const [drift, setdrift] = useState(1)
  const [serverip, setserverip] = useState(0)
  const [signal, setsignal] = useState("")
  const [signpage, setsignpage] = useState(1)
  const [allreg, setallreg] = useState(1)
  const [pop, setpop] = useState(0)
  const [sig, setsig] = useState(1)
  const [regi, setregi] = useState(1)
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [con_password, setcon_password] = useState("")
  const [email, setemail] = useState("")
  const [stadia, setstadia] = useState("unibtt2Xpro")
  

  const efn = useRef("")
  const eem = useRef("")
  const ep = useRef("")
  const cap = useRef("")
  const cp = useRef("")
  const ec = useRef("")


socket.on("connect", ()=> {
  setcode(Codegen())
  //setserverip(1)
//alert(`connection successful with id ${socket.id}`)
} )

socket.on("disconnect", ()=> {
//setserverip(0)
//alert(`connection successful with id ${socket.id}`)
} )

  


//socket.on("sever",  recived => {setsignal(recived) } )
socket.on(code,  recived => {setsignal(recived) } )
  

function _send(drr){
  socket.emit("remote",drr)
  //setsignal(grab.value)
}

  const user = {
    "user":username,
    "password":password,
    "rejected":"rejected",
    "approved":"approved",
    "paid":"paid",
    "total":"total",
    "code":code
  }


useEffect(() => { 
  //initialize() 
  overtry()
 }, [])




//const nkref = window.location.href
const link = window.location.pathname
const host = window.location.origin

const alllynks = ["/","/login","/login/"]

const [winheight, setwinheight] = useState(document.documentElement.clientHeight)
const [winwidth, setwinwidth] = useState(document.documentElement.clientWidth)

window.addEventListener('resize', function() {
 setwinheight(document.documentElement.clientHeight);
 setwinwidth(document.documentElement.clientWidth)
}, true);


const cololibe3 = [ "#03FB75","#06FFF0" ]
const poslib1 = ["2vh","5vh","13vh","16vh","17vh"]
const poslib2 = ["2vh","5vh","13vh","16vh","17vh"]


const cololibe4 = [ "#FB03F5","#AA9CFF" ]
const poslib3 = ["8vh","15vh","3vh","5vh","10vh"]
const poslib4 = ["8vh","15vh","3vh","5vh","10vh"]

function rnd(i){ 
  return( i[Math.floor(Math.random() * i.length)]) 
}

const swim = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize2(),
  width: disize2(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib2),
  overflow:"hidden"
}
const swim2 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize2(),
  width: disize2(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib2),
  overflow:"hidden"
}

const swim3 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize2(),
  width: disize2(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib2),
  overflow:"hidden"
}

const swim4 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe4),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  bottom: rnd(poslib3),
  right: rnd(poslib4),
  overflow:"hidden"
}

const swim5 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe4),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  bottom: rnd(poslib3),
  right: rnd(poslib4),
  overflow:"hidden"
}

const swim6 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe4),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib2),
  right: rnd(poslib1),
  overflow:"hidden"
}


function _signpage(i){ if(signpage===i){return({display:"block"})}else{return({display:"none"})} }
function _sigii(i){ if(sig===i){return({display:'block'})}else{return({display:'none'})} }
function _regii(i){ if(regi===i){return({display:'block'})}else{return({display:'none'})} }
function _regii2(i){ if(regi===i){return({display:'none'})}else{return({display:'block'})} }
function _allreg(i){ if(allreg===i){return({display:'block'})}else{return({display:'none'})} }
function _pumtex(i){ if(sig===i){return({display:"block"})}else{return({display:"none"})} }
function _pop(i) {if(pop==i){return({display:'block'})}else{return({display:'none'})}}


function plogo(i) {
  if(i===1){  if(winheight>winwidth){return("no_page_logo")}else{return("no_page_logox")} }
  if(i===2){  if(winheight>winwidth){return("no_page_text")}else{return("no_page_textx")} }
}


function _link(i) { if(link === i){ return({display:"block"}) }else{ return({display:"none"})} }
function _flashload(i) { if(link === i){ return({display:"none"}) }else{ return({display:"block"})} }
function _linkinvarse() { if( alllynks.some(i=> i===link.toString()) ){ return({display:"none"}) }else{ return({display:"block"})} }

function goto(i) {
  window.location.href = i
}

function overtry() {
  setdrift(2)
  setTimeout(() => {  overtry2(2) }, 6000);
}
function overtry2() {
  setdrift(1)
  setTimeout(() => {  overtry(2) }, 6000);
}

function disize2() { if(winheight>winwidth){return("40vh")}else{return("50vh")} }
function disize() { if(winheight<winwidth){return("30vh")}else{return("40vh")} }
function flex() {  if(drift === 1){return(swim)}else{return(swim)} }  
function flex2() { if(drift === 1){return(swim2)}else{return(swim2)} }
function flex3() { if(drift === 1){return(swim3)}else{return(swim3)} }

function flex4() { if(drift === 1){return(swim4)}else{return(swim4)} }
function flex5() { if(drift === 1){return(swim5)}else{return(swim5)} }


function _next(i) {
 if(sig===1){ if(username.length < 3){ autoflash()  }else{setsig(2);_send(username); setstadia("unibtt2Xpro")} }else{   }
 //if(sig===2){ if(password.length < 8){}else{setsig(2)} }else{}
}


function _new() { 
  setemail("")
  setpassword("")
  setcon_password("")
  efn.current.value=""
  eem.current.value=""
  ep.current.value=""
  cap.current.value=""
  cp.current.value=""
  ec.current.value=""
  setsignpage(2);setregi(1);
 }
 
 function autoflash() {
  setstadia("unibtt2Xpro");setTimeout(() => {  setstadia("unibtt2Xpromax")}, 10);setTimeout(() => {  setstadia("unibtt2Xpro")}, 600);
 }

 const vmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
function _nextlog(i) { if(regi <= 5){ 
  if(regi===1){if(efn.current.value.length < 3 ){ autoflash();  }else{setregi(regi+1)} }
  if(regi===2){if(eem === ""){ autoflash() }else{if(!vmail.test(email)){  autoflash()}else{ setregi(regi+1) }} }
  if(regi===3){if(ep.current.value.length < 7 ){ autoflash();  }else{setregi(regi+1)} }
  if(regi===4){if(cap.current.value.length < 8 ){ autoflash();  }else{setregi(regi+1)} }
  if(regi===5){if(password===con_password){ if(cp.current.value.length < 8 ){ autoflash();  }else{setregi(regi+1)} }else{ autoflash(); } }
  if(regi===6){if(ec.current.value.length < 80 ){ autoflash();  }else{setregi(regi+1)} }
} }


function xii() { if(regi === 3){return( "login_bodxi" )}else{return( "login_bodx" )}}
function glogin() { if(regi === 5 ){return( "Submit" )}else{return( "Next" )}}

function _v1() { if(/[a-z]/.test(password)){ return(5) }else{return(0)} }
function _v2() { if(/[A-Z]/.test(password)){ return(10) }else{return(0)} }
function _v3() { if(/[0-9]/.test(password)){ return(18) }else{return(0)} }
function _v4() { if(/^[@]*$/.test(password)){ return(10) }else{return(0)} }
function _v5() { if(/[@!#$%&'*+/=?^_`{|}~()]/.test(password)){ return(25) }else{return(0)} }
function _v6() { if(/[a-z]/.test(password)){ return(10) }else{return(0)} }
function _v7() { if(password.length >= 10){return(0.5*2) }else{return(password.length*0.5) } }
function _v8() { if( password.length> 8 ){ return(10) }else{return(0)} }
function _v9() { if(/[a-z]/.test(password)){ return(10) }else{return(0)} }
function _v10() { if(/[a-z]/.test(password)){ return(10) }else{return(0)} }

function notex() { 
  if(password.length <3){return ("Require up to 8 character")}
  if(password.length > 2){
  if(!/[A-Z]/.test(password)){return ("Uppercase required")}else
  if(!/[0-9]/.test(password)){return ("number required")}else
  if(!/[a-z]/.test(password)){return ("Lowercase required")}else
  if( password.length< 8 ){return ("Require up to 8 character")}else
  if(_v1()+_v2()+_v3()+_v5()+_v6()+_v7()>0){ return("myG") }
}}


function clsi() { 
  if(password.length <3){return ("c1")}
  if(password.length > 2){
  if(!/[A-Z]/.test(password)){return ("c2")}else
  if(!/[0-9]/.test(password)){return ("c3")}else
  if(!/[a-z]/.test(password)){return ("c4")}else
  if( password.length> 8){return ("c4")}else{return("c3")}
}}


function name() {  }

function Bg() {
  return(
    
  <div>
  <div id="rounder" >
      <div id="bored" style={flex()} ></div>
      <div id="bored" style={flex2()} ></div>
      <div id="bored" style={flex3()} ></div>

      
      <div id="bored" style={flex4()} ></div>
      <div id="bored" style={flex5()} ></div>
    </div>

    <div id="skibi" ></div>
</div>

  )
}

  return (
    <div id="main" >
      <div id="pop" style={_pop(1)} >
      <div id="pop-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure of this Approval</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}}  >Approve</div> 
        <div id="bt0" style={{width:"35%"}}  >Cancel</div></div>
      </div></div>

<div id="Overcover" style={_flashload("--")} >
  <div id="processing" >
    <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
    <div id="pronote" hidden="hidden" >Processing Registration</div>
  </div>
</div>
<div id="Overcover" style={_linkinvarse()} >
  <div id="processing" >
    <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
    
  </div>
</div>

      <div id="_dynamicloader" ></div>
      <div id="fullblack" style={_linkinvarse()} >
        {Bg()}
        
        <div id={plogo(1)} > <img alt="img" id="img" src={logo} /> <div id={plogo(2)} ><div>{host+link}</div>⚠️The page you are looking for doesn't exist</div> </div>
      </div>

        <div id="home_wall" style={_link("/")} ></div>
      <div id="home_scroll" style={_link("/")} >
      <div id="home_main" >
      <div id="home" >
        <div id="home_top_bar" >
        <div id="logo" ><img alt="img" id="img_fx" src={logo} /></div>
          <div id="main-name" >GENUS VILLA</div>
          <div className="home_bt" id="btt_skin" onClick={e=> goto(host+'/login')} ><button id="bt_default">Get Started</button></div></div>

          <div id="home_text" >
        <div id='tx1' className='plce1'>
        In pursuit of knowledge, Learning is a treasure to unlock the golden door to change the world.
        </div>

        <div id="home_motive" >
        Transcend boundaries, metamorphose into your true self. Unleash the dormant power within; the key to unlocking your boundless potential is in your hands. Transform, evolve, and embrace the extraordinary journey of self-discovery.
        </div>
        </div>


        <div id="LGS" >
          <div id="getstarted_ico" >
          <img alt="img" id="img" src={lets} /></div>
          <div id="itexdad" >
          <div id="itex"> Let's get Started! </div>
          <div id="itex2" > Watch this quick demo video to see how to get started</div></div>
        </div>
        
      </div>

        </div>

        <div id="geo" >
          <div id="top_countries" >Top Countries</div>
          <div id="home_L2" ><img alt="img" id="img_f" src={globe} /></div>
        </div>

        <div id="home_L3" >
          <div id="online_com" >Online communities' make people more creative</div>
          <div id="creative_home" >
            <center>
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={wallet} /></div> 
            <div id="mini_header" >Set Up Your Account</div>
            <div id="small_text" > Begin your unforgettable user experience at Genus villa. Get started to unlock full experience </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={gico} /></div> 
            <div id="mini_header" >Set Up Profile</div>
            <div id="small_text" > Unlimited customization without limits; get started to withness enhanced Ai assisted setup </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={logo} /></div> 
            <div id="mini_header" >Genus Ai</div>
            <div id="small_text" > Genus Villa Ai is here to support you throughout your Genus experience. </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={topt} /></div> 
            <div id="mini_header" > Multi theme option</div>
            <div id="small_text" > Choose between different screen mode to customize your premium experience. </div> </div>
            
            </center>
          </div>

        </div>

        <div id="home_L4" hidden="hidden" >
          <center>
            <div id="spl" ><img alt="img" id="img" src={spline} /></div> 

            <div id="online_com" >Subscribe to Genus villa</div>
            <div id="quick_mail" >Info@genusvilla.com</div>
            <div id="btt_skin" ><button id="bt_default" >Send Email</button></div>
            </center>
        </div>

        <div id="home_L5" >
          <div>
        <div id="logo_base" >
        <div id="foot_image" ><img alt="img" id="img_f" src={logo} /></div>
        </div>
            <div id="bsl_text" > Transform your life through interactive Learning </div>
        
        </div>

        <div id="flatfoot" >
          <div id="small_text" > Copy right 2024 Genusvilla, All right reserved </div>
          <div id="small_text" > Privacy Policy Terms & Conditions </div>
        </div>

        </div>

</div>

{/*----------------------------_link 2-----------------------------------*/}

<div id="p2"  style={_link("/login/")} >
{Bg()}
  <div id="two_tango" >

      <div id="two_tango" >
      
    <div id="size_flex" ><div id="bck" ></div><div id="logo_flex" ><img alt="img" id="unimg" src={logo} /></div></div>


    {/*------------------------------------------------------ 1 -----------*/}
    <div id="size_flex2" style={_signpage(1)} >
      <div  className="ico_pos" id="home_ico"  ><img alt="img" id="home_ico" src={virus} /></div>

    <div id="login_bod" >
    <div id="jt" > Sign in</div>

    <div id="log_opt" >
      <div id="unibtt" className="unibtt_lg" onClick={e=> _send(user) } > <div id="bt_img" > <img alt="img" id="img_auto" src={googlelogo} /> </div><div id="rantop" >Sign in with google</div> </div>
      <div id="unibtt" className="unibtt_lg" > <div id="bt_img" > <img alt="img" id="img_auto" src={apple} /> </div><div id="rantop" >Sign in with apple</div> </div>
      <div id="or" className="unibtt_lg" > <center><span id >_____________</span> OR  <span>_____________</span></center> </div>
      <div style={{height:"10px"}} ></div>

      <div><div id={stadia} style={_sigii(1)} > <input id="uninput" onChange={e=> setusername(e.currentTarget.value)} placeholder="Phone email or username" /> </div> <div id="unibtt2X" style={_sigii(2)} > <input id="uninput" placeholder="Enter password" /> </div>  </div>

      <div style={{height:"10px"}} ></div>
      <div id="unibtt2i" className="unibtt_lg"  onClick={e=> _next()} > <div id="bt_img" > </div><div id="rantop" > <span id="nxt" style={_pumtex(1)} >Next</span> <span id="nxt" style={_pumtex(2)} >Sign in</span> </div> </div>
      <div style={{height:"5px"}} ></div>
      <div id="unibtt2i" className="unibtt_lg" onClick={e=> setsig(1)} > <div id="bt_img" > </div><div id="rantop" > <span id="nxt2" style={_pumtex(1)} >Forgot password</span> <span id="nxt2" style={_pumtex(2)} >Back</span>  </div> </div>
     <center> <div id="orx" > Don't have an account ? <span id="green" onClick={e=> setsignpage(3)} >sign up</span>  </div></center> 
       </div>
    </div>
    </div>

{/*------------------------------------------------------ 3 -----------*/}
<div id="size_flex3" style={_signpage(2)} >
  <div className="ico_pos" id="home_ico" ><img alt="img" id="home_ico" src={virus} /></div>

<div id={xii()} >
<div id="jt" >  </div>

<div id="log_opt" >
  <div id="input_notify" style={_regii(4)} >
    <div id="intext" >{notex()}</div>
    <div id="sec_bar" style={{width:(_v1()+_v2()+_v3()+_v5()+_v6()+_v7() +_v8() ).toString()+"%"}} className={clsi()} ></div>
  </div>
  <div style={{height:"15px"}} ></div>
  <div id={stadia} style={_allreg(1)} > 
  <input style={_regii(1)}  ref={efn} id="uninput" placeholder="Enter Full Name" /> 
  <input style={_regii(2)}  ref={eem} onChange={e=> setemail(e.currentTarget.value)} id="uninput" placeholder="Enter E-mail" />
  <input style={_regii(3)}  ref={ep} id="uninput" type="number" placeholder="Enter phone" />
  <input style={_regii(4)}  ref={cap} onChange={e=> setpassword(e.currentTarget.value)} id="uninput" placeholder="Create a password" />
  <input style={_regii(5)}  ref={cp} onChange={e=> setcon_password(e.currentTarget.value)} id="uninput" placeholder="Confirm password" />
  <input style={_regii(6)}  ref={ec} id="uninput" placeholder="Enter code" />
         </div>
  <div style={{height:"20px"}} ></div>
  <div id="unibtt2k" style={_regii2(6)}  className="unibtt_lg" onClick={e=> _nextlog()} >  <div id="rantop" > {glogin()} </div> </div>
  <div id="unibtt2k" style={_regii(3)} className="unibtt_lg"   onClick={e=> setregi(regi+1)} >  <div id="rantop" >Skip</div> </div>
  <div id="unibtt2k" style={_regii(6)} className="unibtt_lg" onClick={e=> _nextlog()} >  <div id="rantop" >Verify email</div> </div>
  <div style={{height:"5px"}} ></div>
  <center> <div id="unibtt2i" style={_allreg(2)}  className="unibtt_lg" > <div id="rantop" >sdsdasdasd</div> </div></center>
 <center> <div id="orx" > Already have an account ? <span id="green" onClick={e=> setsignpage(1)} > sign in</span>  </div></center> 
   </div>
</div>
</div>

    {/*--------------------------------------------------- 3 --------------*/}
    <div id="size_flex2" style={_signpage(3)} >
      <div className="ico_pos" id="home_ico" ><img alt="img" id="home_ico" src={virus} /></div>
    <div id="login_bod" >
    <div id="jt" > Join today</div>

    <div id="log_opt" >
      <div id="unibtt" className="unibtt_lg" > <div id="bt_img" > <img alt="img" id="img_auto" src={googlelogo} /> </div><div id="rantop" >Sign up with google</div> </div>
      <div id="unibtt" className="unibtt_lg" > <div id="bt_img" > <img alt="img" id="img_auto" src={apple} /> </div><div id="rantop" >Sign up with apple</div> </div>
      <div id="or" className="unibtt_lg" > <center><span id >_____________</span> OR  <span>_____________</span></center> </div>
      <div id="unibtt2" className="unibtt_lg" onClick={e=>_new() } > <div id="bt_img" > </div><div id="rantop" >Create an account</div> </div>
     <center> <div  id="or2" className="unibtt_lg" > By signing up you argree to the <span id="green" >terms, Conditions</span>  and <span id="green" >Privacy Policy</span> </div></center> 
      <div id="or3" className="unibtt_lg" > Already have an account ?</div>
      <div id="unibtt2" onClick={e=> setsignpage(1)} > <div id="bt_img" > </div><div id="rantop" >Sign in</div> </div>
       </div>
    </div>
    </div>


  </div>
  </div>
</div>


      <div id="vid" style={_link("/")} ><video src={Gvt} autoPlay loop muted /></div>
    </div>
  );
}
export default App;