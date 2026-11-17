(()=>{var Kf=0,Iu=1,Zf=2;var ya=1,Jf=2,Gi=3,ni=0,Gt=1,vn=2,Ei=0,or=1,jt=2,Lu=3,Du=4,Ml=5;var xs=100,$f=101,Qf=102,jf=103,ed=104,td=200,Ma=201,nd=202,id=203,Nu=204,lr=205,sd=206,rd=207,ad=208,od=209,ld=210,cd=211,ud=212,hd=213,fd=214,Oo=0,Bo=1,zo=2,qs=3,Vo=4,ko=5,Ho=6,Go=7,Uu=0,dd=1,pd=2,ii=0,Sa=1,ba=2,Ta=3,Ea=4,Aa=5,wa=6,_s=7;var Fu=300,vs=301,cr=302,Sl=303,bl=304,us=1e3,jn=1001,Wo=1002,$t=1003,md=1004;var Ra=1005;var xn=1006,Tl=1007;var Ai=1008;var yn=1009,Ou=1010,Bu=1011,ur=1012,El=1013,Xn=1014,On=1015,Bt=1016,Al=1017,wl=1018,ys=1020,zu=35902,Vu=35899,ku=1021,Hu=1022,qn=1023,Mi=1026,wi=1027,Rl=1028,Cl=1029,Wi=1030,Pl=1031;var Il=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,Ll=35840,Dl=35841,Nl=35842,Ul=35843,Fl=36196,Ol=37492,Bl=37496,zl=37488,Vl=37489,Da=37490,kl=37491,Hl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Kl=37814,Zl=37815,Jl=37816,$l=37817,Ql=37818,jl=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,Na=36285,oc=36286;var Br=2300,Xo=2301,No=2302,vu=2303,yu=2400,Mu=2401,Su=2402;var gd=3200;var lc=0,xd=1,Ri="",un="srgb",zr="srgb-linear",Vr="linear",yt="srgb";var Uo=7680;var _d=519,vd=512,yd=513,Md=514,Gu=515,Sd=516,bd=517,Wu=518,Xu=519,Td=35044,hr=35048;var qu="300 es",Dn=2e3,Ys=2001;function x0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=kr("canvas");return i.style.display="block",i}var hf={},Ks=null;function Yu(...i){let e="THREE."+i.shift();Ks?Ks("log",e,...i):console.log(e,...i)}function Ad(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Ad(i);let e="THREE."+i.shift();if(Ks)Ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ad(i);let e="THREE."+i.shift();if(Ks)Ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){let e=i.join(" ");e in hf||(hf[e]=!0,qe(...i))}function wd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rd={[Oo]:Oo,[zo]:Ho,[Vo]:Vo,[qs]:ko,[Bo]:Bo,[Ho]:zo,[Go]:Go,[ko]:qs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,qo=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function v0(i,e){return(i%e+e)%e}function Yc(i,e,t){return(1-t)*i+t*e}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ku(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function y0(i,e){if(e.constructor===Float32Array)return i;let t=Ku(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function M0(i,e){if(e.constructor===Float32Array)return i;let t=Ku(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var eh=class eh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eh.prototype.isVector2=!0;var he=eh,Nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],S=r[a+3];if(h!==S||l!==f||c!==d||u!==x){let _=l*f+c*d+u*x+h*S;_<0&&(f=-f,d=-d,x=-x,S=-S,_=-_);let g=1-o;if(_<.9995){let y=Math.acos(_),M=Math.sin(y);g=Math.sin(g*y)/M,o=Math.sin(o*y)/M,l=l*g+f*o,c=c*g+d*o,u=u*g+x*o,h=h*g+S*o}else{l=l*g+f*o,c=c*g+d*o,u=u*g+x*o,h=h*g+S*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+u*h+l*d-c*f,e[t+1]=l*x+u*f+c*h-o*d,e[t+2]=c*x+u*d+o*f-l*h,e[t+3]=u*x-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h+f*d*x;break;case"YZX":this._x=f*u*h+c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h-f*d*x;break;case"XZY":this._x=f*u*h-c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h+f*d*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var H=th,Kc=new H,ff=new Nn,nh=class nh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],x=n[8],S=s[0],_=s[3],g=s[6],y=s[1],M=s[4],v=s[7],T=s[2],w=s[5],m=s[8];return r[0]=a*S+o*y+l*T,r[3]=a*_+o*M+l*w,r[6]=a*g+o*v+l*m,r[1]=c*S+u*y+h*T,r[4]=c*_+u*M+h*w,r[7]=c*g+u*v+h*m,r[2]=f*S+d*y+x*T,r[5]=f*_+d*M+x*w,r[8]=f*g+d*v+x*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,x=t*h+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=h*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=d*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var $e=nh,Zc=new $e,df=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){let i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}var ut=S0();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,Yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=kr("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var T0=0,$c=new H,_n=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=xn,a=Ai,o=qn,l=yn,c=i.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=fr(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Fu;_n.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],x=l[9],S=l[2],_=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(x+_)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,T=(g+1)/2,w=(u+f)/4,m=(h+S)/4,E=(x+_)/4;return M>v&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=m/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=E/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=m/r,s=E/r),this.set(n,s,r,t),this}let y=Math.sqrt((_-x)*(_-x)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(_-x)/y,this.y=(h-S)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var Ct=ih,Ko=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yl=class yl{constructor(e,t,n,s,r,a,o,l,c,u,h,f,d,x,S,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,d,x,S,_)}set(e,t,n,s,r,a,o,l,c,u,h,f,d,x,S,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=x,g[11]=S,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*h,x=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+x*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,x=c*u,S=c*h;t[0]=f+S*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,x=c*u,S=c*h;t[0]=f-S*o,t[4]=-a*h,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,x=o*u,S=o*h;t[0]=l*u,t[4]=x*c-d,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-f*h,t[8]=x*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+x,t[10]=f-S*h}else if(e.order==="XZY"){let f=a*l,d=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+S,t[5]=a*u,t[9]=d*h-x,t[2]=x*h-d,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,A0)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Di.crossVectors(n,Tn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Di.crossVectors(n,Tn)),Di.normalize(),io.crossVectors(Tn,Di),s[0]=Di.x,s[4]=io.x,s[8]=Tn.x,s[1]=Di.y,s[5]=io.y,s[9]=Tn.y,s[2]=Di.z,s[6]=io.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],x=n[2],S=n[6],_=n[10],g=n[14],y=n[3],M=n[7],v=n[11],T=n[15],w=s[0],m=s[4],E=s[8],B=s[12],C=s[1],F=s[5],k=s[9],X=s[13],O=s[2],q=s[6],Z=s[10],J=s[14],le=s[3],ee=s[7],ae=s[11],re=s[15];return r[0]=a*w+o*C+l*O+c*le,r[4]=a*m+o*F+l*q+c*ee,r[8]=a*E+o*k+l*Z+c*ae,r[12]=a*B+o*X+l*J+c*re,r[1]=u*w+h*C+f*O+d*le,r[5]=u*m+h*F+f*q+d*ee,r[9]=u*E+h*k+f*Z+d*ae,r[13]=u*B+h*X+f*J+d*re,r[2]=x*w+S*C+_*O+g*le,r[6]=x*m+S*F+_*q+g*ee,r[10]=x*E+S*k+_*Z+g*ae,r[14]=x*B+S*X+_*J+g*re,r[3]=y*w+M*C+v*O+T*le,r[7]=y*m+M*F+v*q+T*ee,r[11]=y*E+M*k+v*Z+T*ae,r[15]=y*B+M*X+v*J+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],x=e[3],S=e[7],_=e[11],g=e[15],y=l*d-c*f,M=o*d-c*h,v=o*f-l*h,T=a*d-c*u,w=a*f-l*u,m=a*h-o*u;return t*(S*y-_*M+g*v)-n*(x*y-_*T+g*w)+s*(x*M-S*T+g*m)-r*(x*v-S*w+_*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],x=e[12],S=e[13],_=e[14],g=e[15],y=t*o-n*a,M=t*l-s*a,v=t*c-r*a,T=n*l-s*o,w=n*c-r*o,m=s*c-r*l,E=u*S-h*x,B=u*_-f*x,C=u*g-d*x,F=h*_-f*S,k=h*g-d*S,X=f*g-d*_,O=y*X-M*k+v*F+T*C-w*B+m*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/O;return e[0]=(o*X-l*k+c*F)*q,e[1]=(s*k-n*X-r*F)*q,e[2]=(S*m-_*w+g*T)*q,e[3]=(f*w-h*m-d*T)*q,e[4]=(l*C-a*X-c*B)*q,e[5]=(t*X-s*C+r*B)*q,e[6]=(_*v-x*m-g*M)*q,e[7]=(u*m-f*v+d*M)*q,e[8]=(a*k-o*C+c*E)*q,e[9]=(n*C-t*k-r*E)*q,e[10]=(x*w-S*v+g*y)*q,e[11]=(h*v-u*w-d*y)*q,e[12]=(o*B-a*F-l*E)*q,e[13]=(t*F-n*B+s*E)*q,e[14]=(S*M-x*T-_*y)*q,e[15]=(u*T-h*M+f*y)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,x=r*h,S=a*u,_=a*h,g=o*h,y=l*c,M=l*u,v=l*h,T=n.x,w=n.y,m=n.z;return s[0]=(1-(S+g))*T,s[1]=(d+v)*T,s[2]=(x-M)*T,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+g))*w,s[6]=(_+y)*w,s[7]=0,s[8]=(x+M)*m,s[9]=(_-y)*m,s[10]=(1-(f+S))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,u=1/o,h=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===Dn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ys)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===Dn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ys)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yl.prototype.isMatrix4=!0;var ht=yl,Ls=new H,kn=new ht,E0=new H(0,0,0),A0=new H(1,1,1),Di=new H,io=new H,Tn=new H,mf=new ht,gf=new Nn,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,xf=new H,Ds=new Nn,pi=new ht,so=new H,Rr=new H,R0=new H,C0=new Nn,_f=new H(1,0,0),vf=new H(0,1,0),yf=new H(0,0,1),Mf={type:"added"},P0={type:"removed"},Ns={type:"childadded",child:null},Qc={type:"childremoved",child:null},Qt=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Si,n=new Nn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new $e}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Rr,so,this.up):pi.lookAt(so,Rr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(pi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qt.DEFAULT_UP=new H(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},I0={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let _=t.getJointPose(S,n),g=this._getHandJoint(c,S);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ro={h:0,s:0,l:0};function jc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=v0(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jc(a,r,e+1/3),this.g=jc(a,r,e),this.b=jc(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ut.workingToColorSpace(cn.copy(this),e),Math.round(ot(cn.r*255,0,255))*65536+Math.round(ot(cn.g*255,0,255))*256+Math.round(ot(cn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=un){ut.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(ro);let n=Yc(Ni.h,ro.h,t),s=Yc(Ni.s,ro.s,t),r=Yc(Ni.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Le;Le.NAMES=Pd;var Wr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $s=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new H,mi=new H,eu=new H,gi=new H,Us=new H,Fs=new H,Sf=new H,tu=new H,nu=new H,iu=new H,su=new Ct,ru=new Ct,au=new Ct,vi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),mi.subVectors(n,t),eu.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(mi),l=Hn.dot(eu),c=mi.dot(mi),u=mi.dot(eu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,x=(a*u-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return su.setScalar(0),ru.setScalar(0),au.setScalar(0),su.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,n),au.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(su,r.x),a.addScaledVector(ru,r.y),a.addScaledVector(au,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),mi.subVectors(e,t),Hn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Us.subVectors(s,n),Fs.subVectors(r,n),tu.subVectors(e,n);let l=Us.dot(tu),c=Fs.dot(tu);if(l<=0&&c<=0)return t.copy(n);nu.subVectors(e,s);let u=Us.dot(nu),h=Fs.dot(nu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Us,a);iu.subVectors(e,r);let d=Us.dot(iu),x=Fs.dot(iu);if(x>=0&&d<=x)return t.copy(r);let S=d*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Fs,o);let _=u*x-d*h;if(_<=0&&h-u>=0&&d-x>=0)return Sf.subVectors(r,s),o=(h-u)/(h-u+(d-x)),t.copy(s).addScaledVector(Sf,o);let g=1/(_+S+f);return a=S*g,o=f*g,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),oo.subVectors(this.max,Cr),Os.subVectors(e.a,Cr),Bs.subVectors(e.b,Cr),zs.subVectors(e.c,Cr),Ui.subVectors(Bs,Os),Fi.subVectors(zs,Bs),ss.subVectors(Os,zs);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!ou(t,Os,Bs,zs,oo)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,Os,Bs,zs,oo))?!1:(lo.crossVectors(Ui,Fi),t=[lo.x,lo.y,lo.z],ou(t,Os,Bs,zs,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new H,new H,new H,new H,new H,new H,new H,new H],Gn=new H,ao=new ti,Os=new H,Bs=new H,zs=new H,Ui=new H,Fi=new H,ss=new H,Cr=new H,oo=new H,lo=new H,rs=new H;function ou(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ht=new H,co=new he,L0=0,Mt=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Td,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?Ku(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):y0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):M0(e,this.array)}};var Xr=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},D0=new ti,Pr=new H,lu=new H,Un=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):D0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(lu)),this.expandByPoint(Pr.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},N0=0,Ln=new ht,cu=new Qt,Vs=new H,En=new ti,Ir=new ti,Kt=new H,Pt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(En.min,Ir.min),En.expandByPoint(Kt),Kt.addVectors(En.max,Ir.max),En.expandByPoint(Kt)):(En.expandByPoint(Ir.min),En.expandByPoint(Ir.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Kt.add(Vs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new H,l[B]=new H;let u=new H,h=new H,f=new H,d=new he,x=new he,S=new he,_=new H,g=new H;function y(B,C,F){c[B]=c[C]=c[F]=1,u.fromBufferAttribute(n,B),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,F),d.fromBufferAttribute(r,B),x.fromBufferAttribute(r,C),S.fromBufferAttribute(r,F),h.sub(u),f.sub(u),x.sub(d),S.sub(d);let k=1/(x.x*S.y-S.x*x.y);isFinite(k)&&(_.copy(h).multiplyScalar(S.y).addScaledVector(f,-x.y).multiplyScalar(k),g.copy(f).multiplyScalar(x.x).addScaledVector(h,-S.x).multiplyScalar(k),o[B].add(_),o[C].add(_),o[F].add(_),l[B].add(g),l[C].add(g),l[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,C=M.length;B<C;++B){let F=M[B],k=F.start,X=F.count;for(let O=k,q=k+X;O<q;O+=3)y(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new H,T=new H,w=new H,m=new H;function E(B){w.fromBufferAttribute(s,B),m.copy(w);let C=o[B];v.copy(C),v.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(m,C);let k=T.dot(l[B])<0?-1:1;a.setXYZW(B,v.x,v.y,v.z,k)}for(let B=0,C=n.count;B<C;++B)c[B]&&E(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),S=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,x=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let g=0;g<u;g++)f[x++]=c[d++]}return new Mt(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uu=new H,U0=new H,F0=new $e,Zt=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uu.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),s=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},O0=0,Wn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=or,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=lr,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var _i=new H,hu=new H,uo=new H,ho=new H,Qs=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hu.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),ho.copy(this.origin).sub(hu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(uo),o=ho.dot(this.direction),l=-ho.dot(uo),c=ho.lengthSq(),u=Math.abs(1-a*a),h,f,d,x;if(u>0)if(h=a*l-o,f=a*o-l,x=r*u,h>=0)if(f>=-x)if(f<=x){let S=1/u;h*=S,f*=S,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hu).addScaledVector(uo,f),d}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,x=t.x-a.x,S=t.y-a.y,_=t.z-a.z,g=n.x-a.x,y=n.y-a.y,M=n.z-a.z,v=Math.abs(l),T=Math.abs(c),w=Math.abs(u),m,E,B,C,F,k,X,O,q,Z,J,le;if(v>=T&&v>=w?(B=l,k=h,q=x,le=g,l>=0?(m=c,E=u,C=f,F=d,X=S,O=_,Z=y,J=M):(m=u,E=c,C=d,F=f,X=_,O=S,Z=M,J=y)):T>=w?(B=c,k=f,q=S,le=y,c>=0?(m=u,E=l,C=d,F=h,X=_,O=x,Z=M,J=g):(m=l,E=u,C=h,F=d,X=x,O=_,Z=g,J=M)):(B=u,k=d,q=_,le=M,u>=0?(m=l,E=c,C=h,F=f,X=x,O=S,Z=g,J=y):(m=c,E=l,C=f,F=h,X=S,O=x,Z=y,J=g)),B===0)return null;let ee=m/B,ae=E/B,re=1/B,be=C-ee*k,xe=F-ae*k,se=X-ee*q,de=O-ae*q,Ee=Z-ee*le,ye=J-ae*le,ie=Ee*de-ye*se,Ie=be*ye-xe*Ee,mt=se*xe-de*be;if(s){if(ie<0||Ie<0||mt<0)return null}else if((ie<0||Ie<0||mt<0)&&(ie>0||Ie>0||mt>0))return null;let Fe=ie+Ie+mt;if(Fe===0)return null;let He=re*(ie*k+Ie*q+mt*le);return(Fe>0?He<0:He>0)?null:this.at(He/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bf=new ht,as=new Qs,fo=new Un,Tf=new H,po=new H,mo=new H,go=new H,fu=new H,xo=new H,Ef=new H,_o=new H,st=class extends Qt{constructor(e=new Pt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(fu.fromBufferAttribute(h,e),a?xo.addScaledVector(fu,u):xo.addScaledVector(fu.sub(t),u))}t.add(xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(fo.containsPoint(as.origin)===!1&&(as.intersectSphere(fo,Tf)===null||as.origin.distanceToSquared(Tf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),as.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){let _=f[x],g=a[_.materialIndex],y=Math.max(_.start,d.start),M=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,T=M;v<T;v+=3){let w=o.getX(v),m=o.getX(v+1),E=o.getX(v+2);s=vo(this,g,e,n,c,u,h,w,m,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let _=x,g=S;_<g;_+=3){let y=o.getX(_),M=o.getX(_+1),v=o.getX(_+2);s=vo(this,a,e,n,c,u,h,y,M,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){let _=f[x],g=a[_.materialIndex],y=Math.max(_.start,d.start),M=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,T=M;v<T;v+=3){let w=v,m=v+1,E=v+2;s=vo(this,g,e,n,c,u,h,w,m,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let _=x,g=S;_<g;_+=3){let y=_,M=_+1,v=_+2;s=vo(this,a,e,n,c,u,h,y,M,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};function B0(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;_o.copy(o),_o.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:i}}function vo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,po),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);let u=B0(i,e,t,n,po,mo,go,Ef);if(u){let h=new H;vi.getBarycoord(Ef,po,mo,go,h),s&&(u.uv=vi.getInterpolatedAttribute(s,o,l,c,h,new he)),r&&(u.uv1=vi.getInterpolatedAttribute(r,o,l,c,h,new he)),a&&(u.normal=vi.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new H,materialIndex:0};vi.getNormal(po,mo,go,f.normal),u.face=f,u.barycoord=h}return u}var Yr=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,u=$t,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new ht,Af=new ht,yo=[],wf=new ti,z0=new ht,Lr=new st,Dr=new Un,hs=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,z0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),wf.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Dr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Af.multiplyMatrices(n,ks),Lr.matrixWorld=Af,Lr.raycast(e,yo);for(let a=0,o=yo.length;a<o;a++){let l=yo[a];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,Rl,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new Un,V0=new he(.5,.5),Mo=new H,Bi=class{constructor(e=new Zt,t=new Zt,n=new Zt,s=new Zt,r=new Zt,a=new Zt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],x=r[8],S=r[9],_=r[10],g=r[11],y=r[12],M=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,g-x,T-y).normalize(),s[1].setComponents(c+a,d+u,g+x,T+y).normalize(),s[2].setComponents(c+o,d+h,g+S,T+M).normalize(),s[3].setComponents(c-o,d-h,g-S,T-M).normalize(),n)s[4].setComponents(l,f,_,v).normalize(),s[5].setComponents(c-l,d-f,g-_,T-v).normalize();else if(s[4].setComponents(c-l,d-f,g-_,T-v).normalize(),t===Dn)s[5].setComponents(c+l,d+f,g+_,T+v).normalize();else if(t===Ys)s[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=V0.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rf=new ht,Jo=class i{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Rf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Bi),n[s].setFromProjectionMatrix(Rf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Bi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var fs=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$o=new H,Qo=new H,Cf=new ht,Nr=new Qs,So=new Un,du=new H,Pf=new H,Kr=class extends Qt{constructor(e=new Pt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$o.distanceTo(Qo);e.setAttribute("lineDistance",new lt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Cf.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=d,_=x-1;S<_;S+=c){let g=u.getX(S),y=u.getX(S+1),M=bo(this,e,Nr,l,g,y,S);M&&t.push(M)}if(this.isLineLoop){let S=u.getX(x-1),_=u.getX(d),g=bo(this,e,Nr,l,S,_,x-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let S=d,_=x-1;S<_;S+=c){let g=bo(this,e,Nr,l,S,S+1,S);g&&t.push(g)}if(this.isLineLoop){let S=bo(this,e,Nr,l,x-1,d,x-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment($o,Qo,du,Pf)>n)return;du.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(du);if(!(c<e.near||c>e.far))return{distance:c,point:Pf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var If=new H,Lf=new H,Zr=class extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)If.fromBufferAttribute(t,s),Lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+If.distanceTo(Lf);e.setAttribute("lineDistance",new lt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jr=class extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jo=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Df=new ht,bu=new Qs,To=new Un,Eo=new H,js=class extends Qt{constructor(e=new Pt,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Df.copy(s).invert(),bu.copy(e.ray).applyMatrix4(Df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,S=d;x<S;x++){let _=c.getX(x);Eo.fromBufferAttribute(h,_),Nf(Eo,_,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=f,S=d;x<S;x++)Eo.fromBufferAttribute(h,x),Nf(Eo,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nf(i,e,t,n,s,r,a){let o=bu.distanceSqToPoint(i);if(o<t){let l=new H;bu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $r=class extends _n{constructor(e=[],t=vs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends _n{constructor(e,t,n=Xn,s,r,a,o=$t,l=$t,c,u=Mi,h=1){if(u!==Mi&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jr=class extends Ti{constructor(e,t=Xn,n=vs,s,r,a=$t,o=$t,l,c=Mi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function x(S,_,g,y,M,v,T,w,m,E,B){let C=v/m,F=T/E,k=v/2,X=T/2,O=w/2,q=m+1,Z=E+1,J=0,le=0,ee=new H;for(let ae=0;ae<Z;ae++){let re=ae*F-X;for(let be=0;be<q;be++){let xe=be*C-k;ee[S]=xe*y,ee[_]=re*M,ee[g]=O,c.push(ee.x,ee.y,ee.z),ee[S]=0,ee[_]=0,ee[g]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(be/m),h.push(1-ae/E),J+=1}}for(let ae=0;ae<E;ae++)for(let re=0;re<m;re++){let be=f+re+q*ae,xe=f+re+q*(ae+1),se=f+(re+1)+q*(ae+1),de=f+(re+1)+q*ae;l.push(be,xe,de),l.push(xe,se,de),le+=6}o.addGroup(d,le,B),d+=le,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var er=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,u=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ta=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],x=0,S=[],_=n/2,g=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function y(){let v=new H,T=new H,w=0,m=(t-e)/n;for(let E=0;E<=r;E++){let B=[],C=E/r,F=C*(t-e)+e;for(let k=0;k<=s;k++){let X=k/s,O=X*l+o,q=Math.sin(O),Z=Math.cos(O);T.x=F*q,T.y=-C*n+_,T.z=F*Z,h.push(T.x,T.y,T.z),v.set(q,m,Z).normalize(),f.push(v.x,v.y,v.z),d.push(X,1-C),B.push(x++)}S.push(B)}for(let E=0;E<s;E++)for(let B=0;B<r;B++){let C=S[B][E],F=S[B+1][E],k=S[B+1][E+1],X=S[B][E+1];(e>0||B!==0)&&(u.push(C,F,X),w+=3),(t>0||B!==r-1)&&(u.push(F,k,X),w+=3)}c.addGroup(g,w,0),g+=w}function M(v){let T=x,w=new he,m=new H,E=0,B=v===!0?e:t,C=v===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,_*C,0),f.push(0,C,0),d.push(.5,.5),x++;let F=x;for(let k=0;k<=s;k++){let O=k/s*l+o,q=Math.cos(O),Z=Math.sin(O);m.x=B*Z,m.y=_*C,m.z=B*q,h.push(m.x,m.y,m.z),f.push(0,C,0),w.x=q*.5+.5,w.y=Z*.5*C+.5,d.push(w.x,w.y),x++}for(let k=0;k<s;k++){let X=T+k,O=F+k;v===!0?u.push(O,O+1,X):u.push(O+1,O,X),E+=3}c.addGroup(g,E,v===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ao=new H,wo=new H,pu=new H,Ro=new vi,na=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Fo*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:S,b:_,c:g}=Ro;if(S.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ro.getNormal(pu),h[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,h[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let M=(y+1)%3,v=h[y],T=h[M],w=Ro[u[y]],m=Ro[u[M]],E=`${v}_${T}`,B=`${T}_${v}`,C=f.get(B);C?(pu.dot(C.normal)<=r&&(d.push(w.x,w.y,w.z),d.push(m.x,m.y,m.z)),f.set(B,null)):f.has(E)||f.set(E,{index0:c[y],index1:c[M],normal:pu.clone()})}}for(let x of f.values())if(x){let{index0:S,index1:_}=x;Ao.fromBufferAttribute(o,S),wo.fromBufferAttribute(o,_),d.push(Ao.x,Ao.y,Ao.z),d.push(wo.x,wo.y,wo.z)}this.setAttribute("position",new lt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],a=[],o=new H,l=new ht;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},tr=class extends wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends tr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Uf=new H,Ff=new H,mu=new Zu,gu=new Zu,xu=new Zu,tl=class extends wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ff.subVectors(s[0],s[1]).add(s[0]),c=Ff);let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Uf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Uf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(h),d),S=Math.pow(h.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d);S<1e-4&&(S=1),x<1e-4&&(x=S),_<1e-4&&(_=S),mu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,x,S,_),gu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,x,S,_),xu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,x,S,_)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),gu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(mu.calc(l),gu.calc(l),xu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Of(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function k0(i,e){let t=1-i;return t*t*e}function H0(i,e){return 2*(1-i)*i*e}function G0(i,e){return i*i*e}function Fr(i,e,t,n){return k0(i,e)+H0(i,t)+G0(i,n)}function W0(i,e){let t=1-i;return t*t*t*e}function X0(i,e){let t=1-i;return 3*t*t*i*e}function q0(i,e){return 3*(1-i)*i*i*e}function Y0(i,e){return i*i*i*e}function Or(i,e,t,n,s){return W0(i,e)+X0(i,t)+q0(i,n)+Y0(i,s)}var ia=class extends wn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,s.x,r.x,a.x,o.x),Or(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends wn{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,s.x,r.x,a.x,o.x),Or(e,s.y,r.y,a.y,o.y),Or(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends wn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends wn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends wn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends wn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y),Fr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Of(o,l.x,c.x,u.x,h.x),Of(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Tu=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:tl,CubicBezierCurve:ia,CubicBezierCurve3:nl,EllipseCurve:tr,LineCurve:sa,LineCurve3:il,QuadraticBezierCurve:ra,QuadraticBezierCurve3:sl,SplineCurve:aa}),rl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Tu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},oa=class extends rl{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ra(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ia(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new tr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nr=class extends oa{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new oa().fromJSON(s))}return this}};function K0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Id(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=j0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let f=t;f<s;f+=t){let d=i[f],x=i[f+1];d<o&&(o=d),x<l&&(l=x),d>u&&(u=d),x>h&&(h=x)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return la(r,a,t,o,l,c,0),a}function Id(i,e,t,n,s){let r;if(s===um(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Bf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Bf(a/n|0,i[a],i[a+1],r);return r&&ir(r,r.next)&&(ua(r),r=r.next),r}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function la(i,e,t,n,s,r,a){if(!i)return;!a&&r&&sm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?J0(i,n,s,r):Z0(i)){e.push(l.i,i.i,c.i),ua(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$0(ds(i),e),la(i,e,t,n,s,r,2)):a===2&&Q0(i,e,t,n,s,r):la(ds(i),e,t,n,s,r,1);break}}}function Z0(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=d&&Ur(s,o,r,l,a,c,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function J0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,d=Math.min(o,l,c),x=Math.min(u,h,f),S=Math.max(o,l,c),_=Math.max(u,h,f),g=Eu(d,x,e,t,n),y=Eu(S,_,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=y;){if(M.x>=d&&M.x<=S&&M.y>=x&&M.y<=_&&M!==s&&M!==a&&Ur(o,u,l,h,c,f,M.x,M.y)&&Ft(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=S&&v.y>=x&&v.y<=_&&v!==s&&v!==a&&Ur(o,u,l,h,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=S&&M.y>=x&&M.y<=_&&M!==s&&M!==a&&Ur(o,u,l,h,c,f,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=S&&v.y>=x&&v.y<=_&&v!==s&&v!==a&&Ur(o,u,l,h,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ir(n,s)&&Dd(n,t,t.next,s)&&ca(n,s)&&ca(s,n)&&(e.push(n.i,t.i,s.i),ua(t),ua(t.next),t=i=s),t=t.next}while(t!==i);return ds(t)}function Q0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&om(a,o)){let l=Nd(a,o);a=ds(a,a.next),l=ds(l,l.next),la(a,e,t,n,s,r,0),la(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function j0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Id(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(am(c))}s.sort(em);for(let r=0;r<s.length;r++)t=tm(s[r],t);return t}function em(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function tm(i,e){let t=nm(i,e);if(!t)return e;let n=Nd(t,i);return ds(n,n.next),ds(t,t.next)}function nm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ir(i,t))return t;do{if(ir(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ld(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ca(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&im(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function im(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function sm(i,e,t,n){let s=i;do s.z===0&&(s.z=Eu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rm(s)}function rm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Eu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function am(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ld(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ur(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ld(i,e,t,n,s,r,a,o)}function om(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lm(i,e)&&(ca(i,e)&&ca(e,i)&&cm(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||ir(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ir(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let s=Po(Ft(i,e,t)),r=Po(Ft(i,e,n)),a=Po(Ft(t,n,i)),o=Po(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&Co(i,t,e)||r===0&&Co(i,n,e)||a===0&&Co(t,i,n)||o===0&&Co(t,e,n))}function Co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Po(i){return i>0?1:i<0?-1:0}function lm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ca(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function cm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nd(i,e){let t=Au(i.i,i.x,i.y),n=Au(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bf(i,e,t,n){let s=Au(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Au(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var wu=class{static triangulate(e,t,n=2){return K0(e,t,n)}},ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zf(e),Vf(n,e);let a=e.length;t.forEach(zf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Vf(n,t[l]);let o=wu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ha=class i extends Pt{constructor(e=new nr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:hm,M,v=!1,T,w,m,E;if(g){M=g.getSpacedPoints(u),v=!0,f=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(u,oe),w=new H,m=new H,E=new H}f||(_=0,d=0,x=0,S=0);let B=o.extractPoints(c),C=B.shape,F=B.holes;if(!ls.isClockWise(C)){C=C.reverse();for(let oe=0,me=F.length;oe<me;oe++){let ge=F[oe];ls.isClockWise(ge)&&(F[oe]=ge.reverse())}}function X(oe){let ge=10000000000000001e-36,Ce=oe[0];for(let ve=1;ve<=oe.length;ve++){let Ke=ve%oe.length,Oe=oe[Ke],nt=Oe.x-Ce.x,et=Oe.y-Ce.y,gt=nt*nt+et*et,W=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ce.x),Math.abs(Ce.y)),Nt=ge*W*W;if(gt<=Nt){oe.splice(Ke,1),ve--;continue}Ce=Oe}}X(C),F.forEach(X);let O=F.length,q=C;for(let oe=0;oe<O;oe++){let me=F[oe];C=C.concat(me)}function Z(oe,me,ge){return me||Ze("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(me,ge)}let J=C.length;function le(oe,me,ge){let Ce,ve,Ke,Oe=oe.x-me.x,nt=oe.y-me.y,et=ge.x-oe.x,gt=ge.y-oe.y,W=Oe*Oe+nt*nt,Nt=Oe*gt-nt*et;if(Math.abs(Nt)>Number.EPSILON){let it=Math.sqrt(W),wt=Math.sqrt(et*et+gt*gt),Me=me.x-nt/it,bt=me.y+Oe/it,ke=ge.x-gt/wt,Ge=ge.y+et/wt,U=((ke-Me)*gt-(Ge-bt)*et)/(Oe*gt-nt*et);Ce=Me+Oe*U-oe.x,ve=bt+nt*U-oe.y;let R=Ce*Ce+ve*ve;if(R<=2)return new he(Ce,ve);Ke=Math.sqrt(R/2)}else{let it=!1;Oe>Number.EPSILON?et>Number.EPSILON&&(it=!0):Oe<-Number.EPSILON?et<-Number.EPSILON&&(it=!0):Math.sign(nt)===Math.sign(gt)&&(it=!0),it?(Ce=-nt,ve=Oe,Ke=Math.sqrt(W)):(Ce=Oe,ve=nt,Ke=Math.sqrt(W/2))}return new he(Ce/Ke,ve/Ke)}let ee=[];for(let oe=0,me=q.length,ge=me-1,Ce=oe+1;oe<me;oe++,ge++,Ce++)ge===me&&(ge=0),Ce===me&&(Ce=0),ee[oe]=le(q[oe],q[ge],q[Ce]);let ae=[],re,be=ee.concat();for(let oe=0,me=O;oe<me;oe++){let ge=F[oe];re=[];for(let Ce=0,ve=ge.length,Ke=ve-1,Oe=Ce+1;Ce<ve;Ce++,Ke++,Oe++)Ke===ve&&(Ke=0),Oe===ve&&(Oe=0),re[Ce]=le(ge[Ce],ge[Ke],ge[Oe]);ae.push(re),be=be.concat(re)}let xe;if(_===0)xe=ls.triangulateShape(q,F);else{let oe=[],me=[];for(let ge=0;ge<_;ge++){let Ce=ge/_,ve=d*Math.cos(Ce*Math.PI/2),Ke=x*Math.sin(Ce*Math.PI/2)+S;for(let Oe=0,nt=q.length;Oe<nt;Oe++){let et=Z(q[Oe],ee[Oe],Ke);Ie(et.x,et.y,-ve),Ce===0&&oe.push(et)}for(let Oe=0,nt=O;Oe<nt;Oe++){let et=F[Oe];re=ae[Oe];let gt=[];for(let W=0,Nt=et.length;W<Nt;W++){let it=Z(et[W],re[W],Ke);Ie(it.x,it.y,-ve),Ce===0&&gt.push(it)}Ce===0&&me.push(gt)}}xe=ls.triangulateShape(oe,me)}let se=xe.length,de=x+S;for(let oe=0;oe<J;oe++){let me=f?Z(C[oe],be[oe],de):C[oe];v?(m.copy(T.normals[0]).multiplyScalar(me.x),w.copy(T.binormals[0]).multiplyScalar(me.y),E.copy(M[0]).add(m).add(w),Ie(E.x,E.y,E.z)):Ie(me.x,me.y,0)}for(let oe=1;oe<=u;oe++)for(let me=0;me<J;me++){let ge=f?Z(C[me],be[me],de):C[me];v?(m.copy(T.normals[oe]).multiplyScalar(ge.x),w.copy(T.binormals[oe]).multiplyScalar(ge.y),E.copy(M[oe]).add(m).add(w),Ie(E.x,E.y,E.z)):Ie(ge.x,ge.y,h/u*oe)}for(let oe=_-1;oe>=0;oe--){let me=oe/_,ge=d*Math.cos(me*Math.PI/2),Ce=x*Math.sin(me*Math.PI/2)+S;for(let ve=0,Ke=q.length;ve<Ke;ve++){let Oe=Z(q[ve],ee[ve],Ce);Ie(Oe.x,Oe.y,h+ge)}for(let ve=0,Ke=F.length;ve<Ke;ve++){let Oe=F[ve];re=ae[ve];for(let nt=0,et=Oe.length;nt<et;nt++){let gt=Z(Oe[nt],re[nt],Ce);v?Ie(gt.x,gt.y+M[u-1].y,M[u-1].x+ge):Ie(gt.x,gt.y,h+ge)}}}Ee(),ye();function Ee(){let oe=s.length/3;if(f){let me=0,ge=J*me;for(let Ce=0;Ce<se;Ce++){let ve=xe[Ce];mt(ve[2]+ge,ve[1]+ge,ve[0]+ge)}me=u+_*2,ge=J*me;for(let Ce=0;Ce<se;Ce++){let ve=xe[Ce];mt(ve[0]+ge,ve[1]+ge,ve[2]+ge)}}else{for(let me=0;me<se;me++){let ge=xe[me];mt(ge[2],ge[1],ge[0])}for(let me=0;me<se;me++){let ge=xe[me];mt(ge[0]+J*u,ge[1]+J*u,ge[2]+J*u)}}n.addGroup(oe,s.length/3-oe,0)}function ye(){let oe=s.length/3,me=0;ie(q,me),me+=q.length;for(let ge=0,Ce=F.length;ge<Ce;ge++){let ve=F[ge];ie(ve,me),me+=ve.length}n.addGroup(oe,s.length/3-oe,1)}function ie(oe,me){let ge=oe.length;for(;--ge>=0;){let Ce=ge,ve=ge-1;ve<0&&(ve=oe.length-1);for(let Ke=0,Oe=u+_*2;Ke<Oe;Ke++){let nt=J*Ke,et=J*(Ke+1),gt=me+Ce+nt,W=me+ve+nt,Nt=me+ve+et,it=me+Ce+et;Fe(gt,W,Nt,it)}}}function Ie(oe,me,ge){l.push(oe),l.push(me),l.push(ge)}function mt(oe,me,ge){He(oe),He(me),He(ge);let Ce=s.length/3,ve=y.generateTopUV(n,s,Ce-3,Ce-2,Ce-1);Xe(ve[0]),Xe(ve[1]),Xe(ve[2])}function Fe(oe,me,ge,Ce){He(oe),He(me),He(Ce),He(me),He(ge),He(Ce);let ve=s.length/3,Ke=y.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);Xe(Ke[0]),Xe(Ke[1]),Xe(Ke[3]),Xe(Ke[1]),Xe(Ke[2]),Xe(Ke[3])}function He(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function Xe(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Tu[s.type]().fromJSON(s)),new i(n,e.options)}},hm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],S=e[r*3],_=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-h),new he(f,1-x),new he(S,1-g)]:[new he(o,1-l),new he(u,1-h),new he(d,1-x),new he(_,1-g)]}};function fm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ps=class i extends Pt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new H,f=new he,d=new H,x=new H,S=new H,_=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:_=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-_,d.z=g*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:_=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-_,d.z=g*0,x.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(x)}for(let y=0;y<=t;y++){let M=n+y*u*s,v=Math.sin(M),T=Math.cos(M);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*T,a.push(h.x,h.y,h.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);let m=l[3*w+0]*v,E=l[3*w+1],B=l[3*w+0]*T;c.push(m,E,B)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,T=v,w=v+e.length,m=v+e.length+1,E=v+1;r.push(T,w,E),r.push(m,E,w)}this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Rn=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],x=[],S=[],_=[];for(let g=0;g<u;g++){let y=g*f-a;for(let M=0;M<c;M++){let v=M*h-r;x.push(v,-y,0),S.push(0,0,1),_.push(M/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let M=y+c*g,v=y+c*(g+1),T=y+1+c*(g+1),w=y+1+c*g;d.push(M,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new lt(x,3)),this.setAttribute("normal",new lt(S,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},sr=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new H,x=new he;for(let S=0;S<=s;S++){for(let _=0;_<=n;_++){let g=r+_/n*a;d.x=h*Math.cos(g),d.y=h*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,u.push(x.x,x.y)}h+=f}for(let S=0;S<s;S++){let _=S*(n+1);for(let g=0;g<n;g++){let y=g+_,M=y,v=y+n+1,T=y+n+2,w=y+1;o.push(M,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fa=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new H,f=new H,d=[],x=[],S=[],_=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=a+M*o,T=e*Math.cos(v),w=Math.sqrt(e*e-T*T),m=0;g===0&&a===0?m=.5/t:g===n&&l===Math.PI&&(m=-.5/t);for(let E=0;E<=t;E++){let B=E/t,C=s+B*r;h.x=-w*Math.cos(C),h.y=T,h.z=w*Math.sin(C),x.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),_.push(B+m,1-M),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=u[g][y+1],v=u[g][y],T=u[g+1][y],w=u[g+1][y+1];(g!==0||a>0)&&d.push(M,v,w),(g!==n-1||l<Math.PI)&&d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new lt(x,3)),this.setAttribute("normal",new lt(S,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var da=class extends Wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function kf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Yn={clone:Ms,merge:fn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rr=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zi=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var al=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Io(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mu:r=e,o=2*t-n;break;case Su:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:a=e,l=2*n-t;break;case Su:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),S=x*x,_=S*x,g=-f*_+2*f*S-f*x,y=(1+f)*_+(-1.5-2*f)*S+(-.5+f)*x+1,M=(-1-d)*_+(1.5+d)*S+.5*x,v=d*_-d*S;for(let T=0;T!==o;++T)r[T]=g*a[u+T]+y*a[c+T]+M*a[l+T]+v*a[h+T];return r}},cl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},ul=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class extends Vi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(n-t)/(s-t),S=1-x;for(let _=0;_!==o;++_)r[_]=a[c+_]*S+a[l+_]*x;return r}let f=o*2,d=e-1;for(let x=0;x!==o;++x){let S=a[c+x],_=a[l+x],g=d*f+x*2,y=h[g],M=h[g+1],v=e*f+x*2,T=u[v],w=u[v+1],m=xm(n,t,y,T,s);r[x]=Ud(m,S,M,w,_)}return r}};function Ud(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function gm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function xm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ud(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=gm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Io(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break;case vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Io(this.settings)&&(Hf(this.settings.inTangents,e),Hf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Io(this.settings)&&(Gf(this.settings.inTangents,e),Gf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,d=h+n;for(let x=0;x!==n;++x){let S=t[h+x];if(S!==t[f+x]||S!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xo;var ki=class extends Cn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Br;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="color";var dl=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};dl.prototype.ValueTypeName="number";var pl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ma=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Br;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],x=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new gl,xl=class{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ga=class extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_u=new ht,Wf=new H,Xf=new H,_l=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new H,Do=new Nn,Qn=new H,_a=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Do,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lo,Do,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new H,qf=new he,Yf=new he,hn=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,qf,Yf),t.subVectors(Yf,qf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ms=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends _l{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gs=-90,Ws=1,ar=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new hn(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new hn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new hn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let l=new hn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new hn(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},vl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_m.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _m(){this._document.hidden===!1&&this.reset()}var $u="\\[\\]\\.:\\/",vm=new RegExp("["+$u+"]","g"),Qu="[^"+$u+"]",ym="[^"+$u.replace("\\.","")+"]",Mm=/((?:WC+[\/:])*)/.source.replace("WC",Qu),Sm=/(WCOD+)?/.source.replace("WCOD",ym),bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),Em=new RegExp("^"+Mm+Sm+bm+Tm+"$"),Am=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vm,"")}static parseTrackName(e){let t=Em.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Am.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Cu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);var sh=class sh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};sh.prototype.isMatrix2=!0;var Pu=sh;function ju(i,e,t,n){let s=wm(n);switch(t){case ku:return i*e;case Rl:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case Hu:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Il:return i*e*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Fl:case Ol:case zl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Da:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Na:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wm(i){switch(i){case yn:case Ou:return{byteLength:1,components:1};case ur:case Bu:case Bt:return{byteLength:2,components:1};case Al:case wl:return{byteLength:2,components:4};case Xn:case El:case On:return{byteLength:4,components:1};case zu:case Vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){let x=h[f],S=h[d];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,h[f]=S)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){let S=h[d];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Pm,alphahash_pars_fragment:Im,alphamap_fragment:Lm,alphamap_pars_fragment:Dm,alphatest_fragment:Nm,alphatest_pars_fragment:Um,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:Vm,beginnormal_vertex:km,bsdfs:Hm,iridescence_fragment:Gm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:Km,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:$m,color_vertex:Qm,common:jm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:xg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:yg,lights_toon_fragment:Sg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Ag,lights_physical_pars_fragment:wg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Pg,lightprobes_pars_fragment:Ig,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:kg,morphinstance_vertex:Hg,morphcolor_vertex:Gg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:Kg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:$g,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:a1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:x1,skinnormal_vertex:_1,specularmap_fragment:v1,specularmap_pars_fragment:y1,tonemapping_fragment:M1,tonemapping_pars_fragment:S1,transmission_fragment:b1,transmission_pars_fragment:T1,uv_pars_fragment:E1,uv_pars_vertex:A1,uv_vertex:w1,worldpos_vertex:R1,background_vert:C1,background_frag:P1,backgroundCube_vert:I1,backgroundCube_frag:L1,cube_vert:D1,cube_frag:N1,depth_vert:U1,depth_frag:F1,distance_vert:O1,distance_frag:B1,equirect_vert:z1,equirect_frag:V1,linedashed_vert:k1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:q1,meshmatcap_vert:Y1,meshmatcap_frag:K1,meshnormal_vert:Z1,meshnormal_frag:J1,meshphong_vert:$1,meshphong_frag:Q1,meshphysical_vert:j1,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ax,sprite_vert:ox,sprite_frag:lx},we={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ri={basic:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Le(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([we.points,we.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([we.common,we.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([we.sprite,we.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:fn([we.common,we.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:fn([we.lights,we.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ri.physical={uniforms:fn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var cc={r:0,b:0,g:0},cx=new ht,rp=new $e;rp.set(-1,0,0,0,1,0,0,0,1);function ux(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function x(y){let M=!1,v=d(y);v===null?_(a,o):v&&v.isColor&&(_(v,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new st(new Fn(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ms(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new st(new Rn(2,2),new At({name:"BackgroundMaterial",uniforms:Ms(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(cc,Ju(i)),t.buffers.color.setClear(cc.r,cc.g,cc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,_(a,o)},render:x,addToRenderList:S,dispose:g}}function hx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(F,k,X,O,q){let Z=!1,J=h(F,O,X,k);r!==J&&(r=J,c(r.object)),Z=d(F,O,X,q),Z&&x(F,O,X,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(F,k,X,O),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function h(F,k,X,O){let q=O.wireframe===!0,Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);let J=F.isInstancedMesh===!0?F.id:0,le=Z[J];le===void 0&&(le={},Z[J]=le);let ee=le[X.id];ee===void 0&&(ee={},le[X.id]=ee);let ae=ee[q];return ae===void 0&&(ae=f(l()),ee[q]=ae),ae}function f(F){let k=[],X=[],O=[];for(let q=0;q<t;q++)k[q]=0,X[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:O,object:F,attributes:{},index:null}}function d(F,k,X,O){let q=r.attributes,Z=k.attributes,J=0,le=X.getAttributes();for(let ee in le)if(le[ee].location>=0){let re=q[ee],be=Z[ee];if(be===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(be=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(be=F.instanceColor)),re===void 0||re.attribute!==be||be&&re.data!==be.data)return!0;J++}return r.attributesNum!==J||r.index!==O}function x(F,k,X,O){let q={},Z=k.attributes,J=0,le=X.getAttributes();for(let ee in le)if(le[ee].location>=0){let re=Z[ee];re===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));let be={};be.attribute=re,re&&re.data&&(be.data=re.data),q[ee]=be,J++}r.attributes=q,r.attributesNum=J,r.index=O}function S(){let F=r.newAttributes;for(let k=0,X=F.length;k<X;k++)F[k]=0}function _(F){g(F,0)}function g(F,k){let X=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;X[F]=1,O[F]===0&&(i.enableVertexAttribArray(F),O[F]=1),q[F]!==k&&(i.vertexAttribDivisor(F,k),q[F]=k)}function y(){let F=r.newAttributes,k=r.enabledAttributes;for(let X=0,O=k.length;X<O;X++)k[X]!==F[X]&&(i.disableVertexAttribArray(X),k[X]=0)}function M(F,k,X,O,q,Z,J){J===!0?i.vertexAttribIPointer(F,k,X,q,Z):i.vertexAttribPointer(F,k,X,O,q,Z)}function v(F,k,X,O){S();let q=O.attributes,Z=X.getAttributes(),J=k.defaultAttributeValues;for(let le in Z){let ee=Z[le];if(ee.location>=0){let ae=q[le];if(ae===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){let re=ae.normalized,be=ae.itemSize,xe=e.get(ae);if(xe===void 0)continue;let se=xe.buffer,de=xe.type,Ee=xe.bytesPerElement,ye=de===i.INT||de===i.UNSIGNED_INT||ae.gpuType===El;if(ae.isInterleavedBufferAttribute){let ie=ae.data,Ie=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,mt=ae.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Fe=0;Fe<ee.locationSize;Fe++)g(ee.location+Fe,ie.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Fe=0;Fe<ee.locationSize;Fe++)_(ee.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Fe=0;Fe<ee.locationSize;Fe++)M(ee.location+Fe,be/ee.locationSize,de,re,Ie*Ee,(mt+be/ee.locationSize*Fe)*Ee,ye)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)g(ee.location+ie,ae.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<ee.locationSize;ie++)_(ee.location+ie);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ie=0;ie<ee.locationSize;ie++)M(ee.location+ie,be/ee.locationSize,de,re,be*Ee,be/ee.locationSize*ie*Ee,ye)}}else if(J!==void 0){let re=J[le];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ee.location,re);break;case 3:i.vertexAttrib3fv(ee.location,re);break;case 4:i.vertexAttrib4fv(ee.location,re);break;default:i.vertexAttrib1fv(ee.location,re)}}}}y()}function T(){B();for(let F in n){let k=n[F];for(let X in k){let O=k[X];for(let q in O){let Z=O[q];for(let J in Z)u(Z[J].object),delete Z[J];delete O[q]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let X in k){let O=k[X];for(let q in O){let Z=O[q];for(let J in Z)u(Z[J].object),delete Z[J];delete O[q]}}delete n[F.id]}function m(F){for(let k in n){let X=n[k];for(let O in X){let q=X[O];if(q[F.id]===void 0)continue;let Z=q[F.id];for(let J in Z)u(Z[J].object),delete Z[J];delete q[F.id]}}}function E(F){for(let k in n){let X=n[k],O=F.isInstancedMesh===!0?F.id:0,q=X[O];if(q!==void 0){for(let Z in q){let J=q[Z];for(let le in J)u(J[le].object),delete J[le];delete q[Z]}delete X[O],Object.keys(X).length===0&&delete n[k]}}}function B(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:m,initAttributes:S,enableAttribute:_,disableUnusedAttributes:y}}function fx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==qn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let E=m===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==yn&&m!==On&&!E&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:w}}function px(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zt,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let x=h.clippingPlanes,S=h.clipIntersection,_=h.clipShadows,g=i.get(h);if(!s||x===null||x.length===0||r&&!_)r?u(null):c();else{let y=r?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=u(x,f,M,d);for(let T=0;T!==M;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,x){let S=h!==null?h.length:0,_=null;if(S!==0){if(_=l.value,x!==!0||_===null){let g=d+S*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let M=0,v=d;M!==S;++M,v+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}var Oa=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Ei});r.uniforms.tEquirect.value=t;let a=new st(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=xn),new ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Od=256,mx=3,gx=20,ap=256,op=16,xx=3,_x=new H,vx=new Le,pr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new st(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=_x}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,x=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(vx));let _=new ar(n,s,u);return _.position.copy(o),_.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=x,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Od,Cd(e))}_fromTexture(e,t){e.mapping===vs||e.mapping===cr?this._setSize(e.image.length===0?Od:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Bd(e,!1,!1),n=Math.log2(e)-mx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vs||e.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yx(),this._integrationMaterial=Mx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/op);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-xx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ap*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Bd(i,e,t){return new Oa(i,{minFilter:Ai,generateMipmaps:e,type:Bt,colorSpace:zr,depthBuffer:t})}function Ba(i,e,t){return new At({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:Gt,blending:Ei,depthTest:!1,depthWrite:!1})}function yx(){return Ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ap}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Mx(){return Ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:op}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sx(){return Ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zd(){return Ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vd(){return Ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Sl||d===bl)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let S=new Oa(x.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,x=d===Sl||d===bl,S=d===vs||d===cr;if(x||S){let _=t.get(f),g=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new pr(i)),_=x?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{let y=f.image;return x&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new pr(i)),_=x?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,d){return d===Sl?f.mapping=vs:d===bl&&(f.mapping=cr),f}function l(f){let d=0,x=6;for(let S=0;S<x;S++)f[S]!==void 0&&d++;return d===x}function c(f){let d=f.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Tx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ex(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let _ in x.attributes)e.remove(x.attributes[_]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let S=r.get(x);S&&(e.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(x){let S=x.attributes;for(let _ in S)e.update(S[_],i.ARRAY_BUFFER)}function h(x){let S=x.index,_=x.attributes.position,g=0;if(_===void 0)return;let y=S!==null?S.array.length:_.array.length/3-1,M=_.count>=65535?qr:Xr,v=new M(Math.ceil(y/3)*6,1),T=v.array;if(S!==null){let m=S.array;g=S.version;for(let E=0,B=0;E<y;E+=3){let C=m[E+0],F=m[E+1],k=m[E+2];T[B++]=C,T[B++]=F,T[B++]=F,T[B++]=k,T[B++]=k,T[B++]=C}}else{g=_.version;for(let m=0,E=0;m<y;m+=3){let B=m+0,C=m+1,F=m+2;T[E++]=B,T[E++]=C,T[E++]=C,T[E++]=F,T[E++]=F,T[E++]=B}}v.version=g;let w=r.get(x);w&&e.remove(w),r.set(x,v)}function f(x){let S=r.get(x);if(S){let _=x.index;_!==null&&S.version<_.version&&h(x)}else h(x);return r.get(x)}function d(){for(let x in s){let S=s[x].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Ax(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let S=0;for(let _=0;_<d;_++)S+=f[_];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rx(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let B=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let v=o.attributes.position.count*M,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*T*4*h),m=new Hr(w,v,T,h);m.type=On,m.needsUpdate=!0;let E=M*4;for(let C=0;C<h;C++){let F=_[C],k=g[C],X=y[C],O=v*T*4*C;for(let q=0;q<F.count;q++){let Z=q*E;d===!0&&(s.fromBufferAttribute(F,q),w[O+Z+0]=s.x,w[O+Z+1]=s.y,w[O+Z+2]=s.z,w[O+Z+3]=0),x===!0&&(s.fromBufferAttribute(k,q),w[O+Z+4]=s.x,w[O+Z+5]=s.y,w[O+Z+6]=s.z,w[O+Z+7]=0),S===!0&&(s.fromBufferAttribute(X,q),w[O+Z+8]=s.x,w[O+Z+9]=s.y,w[O+Z+10]=s.z,w[O+Z+11]=X.itemSize===4?s.w:1)}}f={count:h,texture:m,size:new he(v,T)},n.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cx(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Px={[Sa]:"LINEAR_TONE_MAPPING",[ba]:"REINHARD_TONE_MAPPING",[Ta]:"CINEON_TONE_MAPPING",[Ea]:"ACES_FILMIC_TONE_MAPPING",[wa]:"AGX_TONE_MAPPING",[_s]:"NEUTRAL_TONE_MAPPING",[Aa]:"CUSTOM_TONE_MAPPING"};function Ix(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Pt;u.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new lt([0,2,0,0,2,0],2));let h=new rr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new st(u,h),d=new ms(-1,1,1,-1,0,1),x=null,S=null,_=!1,g,y=null,M=[],v=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let m=0;m<M.length;m++){let E=M[m];E.setSize&&E.setSize(T,w)}},this.setEffects=function(T){M=T,v=M.length>0&&M[0].isRenderPass===!0;let w=a.width,m=a.height;M.length>0&&o===null&&(o=new Ot(w,m,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(w,m,{type:Bt,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&M.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ti(w,m),r===!0&&(c.format=wi,c.type=ys)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<M.length;B++){let C=M[B];C.setSize&&C.setSize(w,m),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(_||T.toneMapping===ii&&M.length===0)return!1;if(y=w,w!==null){let m=w.width,E=w.height;(a.width!==m||a.height!==E)&&this.setSize(m,E)}return v===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=ii,!0},this.hasRenderPass=function(){return v},this.end=function(T,w){T.toneMapping=g,_=!0;let m=a,E=o;for(let B=0;B<M.length;B++){let C=M[B];C.enabled!==!1&&(C.render(T,E,m,w),C.needsSwap!==!1&&(m=E,E=E===o?l:o))}if(x!==T.outputColorSpace||S!==T.toneMapping){x=T.outputColorSpace,S=T.toneMapping,h.defines={},ut.getTransfer(x)===yt&&(h.defines.SRGB_TRANSFER="");let B=Px[S];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=m.texture,T.setRenderTarget(y),T.render(f,d),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var lp=new _n,cp=new Ti(1,1),up=new jr(1),hp=new Hr,fp=new Zo,dp=new $r,kd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fc(i,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Xt(t,n)}}function Ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Xt(t,n)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),Xt(t,n)}}function zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function dc(i){return i.version===0&&(i.compareFunction=Xu,i.needsUpdate=!0),i}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=dc(cp):r=lp,t.setTexture2D(e||r,s)}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fp,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=dc(up):r=dp,t.setTextureCube(e||r,s)}function Jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hp,s)}function $x(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Vx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function Qx(i,e){i.uniform1fv(this.addr,e)}function jx(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function e_(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function t_(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function n_(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i_(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s_(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r_(i,e){i.uniform1iv(this.addr,e)}function a_(i,e){i.uniform2iv(this.addr,e)}function o_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function h_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=dc(cp):a=lp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fp,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=dc(up):a=dp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hp,r[a])}function x_(i){switch(i){case 5126:return Qx;case 35664:return jx;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}},lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}},ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rh=/(\w+)(\])?(\[|\.)?/g;function qd(i,e){i.seq.push(e),i.map[e.id]=e}function __(i,e,t){let n=i.name,s=n.length;for(rh.lastIndex=0;;){let r=rh.exec(n),a=rh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qd(t,c===void 0?new oh(o,i,e):new lh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ch(o),qd(t,h)),t=h}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);__(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v_=37297,y_=0;function M_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kd=new $e;function S_(i){ut._getMatrix(Kd,ut.workingColorSpace,i);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(e),o)}else return r}function b_(i,e){let t=S_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var T_={[Sa]:"Linear",[ba]:"Reinhard",[Ta]:"Cineon",[Ea]:"ACESFilmic",[wa]:"AgX",[_s]:"Neutral",[Aa]:"Custom"};function E_(i,e){let t=T_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uc=new H;function A_(){ut.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function R_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fa(i){return i!==""}function Jd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(P_,I_)}function I_(i,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uh(t)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(L_,D_)}function D_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var N_={[ya]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function U_(i){return N_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[cr]:"ENVMAP_MODE_REFRACTION"};function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B_={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B_[i.combine]||"ENVMAP_BLENDING_NONE"}function V_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=U_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=O_(t),h=z_(t),f=w_(t),d=R_(r),x=s.createProgram(),S,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),_.length>0&&(_+=`
`)):(S=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),_=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?rt.tonemapping_pars_fragment:"",t.toneMapping!==ii?E_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),a=uh(a),a=Jd(a,t),a=$d(a,t),o=uh(o),o=Jd(o,t),o=$d(o,t),a=Qd(a),o=Qd(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=g+S+a,M=g+_+o,v=Yd(s,s.VERTEX_SHADER,y),T=Yd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,v),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(T)||"",O=F.trim(),q=k.trim(),Z=X.trim(),J=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,T);else{let ee=Zd(s,v,"vertex"),ae=Zd(s,T,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ee+`
`+ae)}else O!==""?qe("WebGLProgram: Program Info Log:",O):(q===""||Z==="")&&(le=!1);le&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:q,prefix:S},fragmentShader:{log:Z,prefix:_}})}s.deleteShader(v),s.deleteShader(T),m=new dr(s,x),E=C_(s,x)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(x,v_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=T,this}var k_=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fh(e),t.set(e,n)),n}},fh=class{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}};function H_(i){return i===Wi||i===Da||i===Na}function G_(i,e,t,n,s,r){let a=new Gr,o=new hh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(m){return l.add(m),m===0?"uv":`uv${m}`}function x(m,E,B,C,F,k){let X=C.fog,O=F.geometry,q=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,Z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,J=e.get(m.envMap||q,Z),le=f[m.type],ee=n.precision;m.precision!==null&&(ee=n.getMaxPrecision(m.precision),ee!==m.precision&&qe("WebGLProgram.getParameters:",m.precision,"not supported, using",ee,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=ae!==void 0?ae.length:0,be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let xe,se,de,Ee;if(le){let _e=ri[le];xe=_e.vertexShader,se=_e.fragmentShader}else{xe=m.vertexShader,se=m.fragmentShader;let _e=o.getVertexShaderStage(m),ct=o.getFragmentShaderStage(m);o.update(m,_e,ct),de=_e.id,Ee=ct.id}let ye=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Fe=!!m.map,He=!!m.matcap,Xe=!!J,oe=Xe&&J.isPMREMTexture===!0,me=!!m.aoMap,ge=!!m.lightMap,Ce=!!m.bumpMap&&m.wireframe===!1,ve=!!m.normalMap,Ke=!!m.displacementMap,Oe=!!m.emissiveMap,nt=!!m.metalnessMap,et=!!m.roughnessMap,gt=m.anisotropy>0,W=m.clearcoat>0,Nt=m.diffuseRoughness>0,it=m.dispersion>0,wt=m.retroreflectivity>0,Me=m.iridescence>0,bt=m.sheen>0,ke=m.transmission>0,Ge=gt&&!!m.anisotropyMap,U=W&&!!m.clearcoatMap,R=W&&!!m.clearcoatNormalMap,K=W&&!!m.clearcoatRoughnessMap,fe=Nt&&!!m.diffuseRoughnessMap,p=Me&&!!m.iridescenceMap,b=Me&&!!m.iridescenceThicknessMap,L=bt&&!!m.sheenColorMap,P=bt&&!!m.sheenRoughnessMap,D=!!m.specularMap,N=!!m.specularColorMap,A=!!m.specularIntensityMap,z=ke&&!!m.transmissionMap,V=ke&&!!m.thicknessMap,Y=!!m.gradientMap,$=!!m.alphaMap,te=m.alphaTest>0,ue=!!m.alphaHash,pe=!!m.extensions,ce=ii;m.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ae=oe?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,Be={shaderID:le,shaderType:m.type,shaderName:m.name,vertexShader:xe,fragmentShader:se,defines:m.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:ee,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Fe,matcap:He,envMap:Xe,envMapMode:Xe&&J.mapping,envMapPMREM:oe,envMapMaxLod:oe?Ae.length-1:null,envMapSize:oe?Ae[0].width:null,aoMap:me,lightMap:ge,bumpMap:Ce,normalMap:ve,displacementMap:Ke,emissiveMap:Oe,normalMapObjectSpace:ve&&m.normalMapType===xd,normalMapTangentSpace:ve&&m.normalMapType===lc,packedNormalMap:ve&&m.normalMapType===lc&&H_(m.normalMap.format),metalnessMap:nt,roughnessMap:et,anisotropy:gt,anisotropyMap:Ge,clearcoat:W,clearcoatMap:U,clearcoatNormalMap:R,clearcoatRoughnessMap:K,diffuseRoughness:Nt,diffuseRoughnessMap:fe,dispersion:it,retroreflection:wt,iridescence:Me,iridescenceMap:p,iridescenceThicknessMap:b,sheen:bt,sheenColorMap:L,sheenRoughnessMap:P,specularMap:D,specularColorMap:N,specularIntensityMap:A,transmission:ke,transmissionMap:z,thicknessMap:V,gradientMap:Y,opaque:m.transparent===!1&&m.blending===or&&m.alphaToCoverage===!1,alphaMap:$,alphaTest:te,alphaHash:ue,combine:m.combine,mapUv:Fe&&d(m.map.channel),aoMapUv:me&&d(m.aoMap.channel),lightMapUv:ge&&d(m.lightMap.channel),bumpMapUv:Ce&&d(m.bumpMap.channel),normalMapUv:ve&&d(m.normalMap.channel),displacementMapUv:Ke&&d(m.displacementMap.channel),emissiveMapUv:Oe&&d(m.emissiveMap.channel),metalnessMapUv:nt&&d(m.metalnessMap.channel),roughnessMapUv:et&&d(m.roughnessMap.channel),anisotropyMapUv:Ge&&d(m.anisotropyMap.channel),clearcoatMapUv:U&&d(m.clearcoatMap.channel),clearcoatNormalMapUv:R&&d(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&d(m.diffuseRoughnessMap.channel),iridescenceMapUv:p&&d(m.iridescenceMap.channel),iridescenceThicknessMapUv:b&&d(m.iridescenceThicknessMap.channel),sheenColorMapUv:L&&d(m.sheenColorMap.channel),sheenRoughnessMapUv:P&&d(m.sheenRoughnessMap.channel),specularMapUv:D&&d(m.specularMap.channel),specularColorMapUv:N&&d(m.specularColorMap.channel),specularIntensityMapUv:A&&d(m.specularIntensityMap.channel),transmissionMapUv:z&&d(m.transmissionMap.channel),thicknessMapUv:V&&d(m.thicknessMap.channel),alphaMapUv:$&&d(m.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||gt),vertexNormals:!!O.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Fe||$),fog:!!X,useFog:m.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||O.attributes.normal===void 0&&ve===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:be,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Fe&&m.map.isVideoTexture===!0&&ut.getTransfer(m.map.colorSpace)===yt,decodeVideoTextureEmissive:Oe&&m.emissiveMap.isVideoTexture===!0&&ut.getTransfer(m.emissiveMap.colorSpace)===yt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===vn,flipSided:m.side===Gt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:pe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&m.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function S(m){let E=[];if(m.shaderID?E.push(m.shaderID):(E.push(m.customVertexShaderID),E.push(m.customFragmentShaderID)),m.defines!==void 0)for(let B in m.defines)E.push(B),E.push(m.defines[B]);return m.isRawShaderMaterial===!1&&(_(E,m),g(E,m),E.push(i.outputColorSpace)),E.push(m.customProgramCacheKey),E.join()}function _(m,E){m.push(E.precision),m.push(E.outputColorSpace),m.push(E.envMapMode),m.push(E.envMapPMREM),m.push(E.envMapMaxLod),m.push(E.envMapSize),m.push(E.mapUv),m.push(E.alphaMapUv),m.push(E.lightMapUv),m.push(E.aoMapUv),m.push(E.bumpMapUv),m.push(E.normalMapUv),m.push(E.displacementMapUv),m.push(E.emissiveMapUv),m.push(E.metalnessMapUv),m.push(E.roughnessMapUv),m.push(E.anisotropyMapUv),m.push(E.clearcoatMapUv),m.push(E.clearcoatNormalMapUv),m.push(E.clearcoatRoughnessMapUv),m.push(E.diffuseRoughnessMapUv),m.push(E.iridescenceMapUv),m.push(E.iridescenceThicknessMapUv),m.push(E.sheenColorMapUv),m.push(E.sheenRoughnessMapUv),m.push(E.specularMapUv),m.push(E.specularColorMapUv),m.push(E.specularIntensityMapUv),m.push(E.transmissionMapUv),m.push(E.thicknessMapUv),m.push(E.combine),m.push(E.fogExp2),m.push(E.sizeAttenuation),m.push(E.morphTargetsCount),m.push(E.numSunLights),m.push(E.numDirLights),m.push(E.numPointLights),m.push(E.numSpotLights),m.push(E.numSpotLightMaps),m.push(E.numHemiLights),m.push(E.numRectAreaLights),m.push(E.numSunLightShadows),m.push(E.numDirLightShadows),m.push(E.numPointLightShadows),m.push(E.numSpotLightShadows),m.push(E.numSpotLightShadowsWithMaps),m.push(E.numLightProbes),m.push(E.numLightProbeGrids),m.push(E.shadowMapType),m.push(E.toneMapping),m.push(E.numClippingPlanes),m.push(E.numClipIntersection),m.push(E.depthPacking)}function g(m,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function y(m){let E=f[m.type],B;if(E){let C=ri[E];B=Yn.clone(C.uniforms)}else B=m.uniforms;return B}function M(m,E){let B=u.get(E);return B!==void 0?++B.usedTimes:(B=new V_(i,E,m,s),c.push(B),u.set(E,B)),B}function v(m){if(--m.usedTimes===0){let E=c.indexOf(m);c[E]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function T(m){o.remove(m)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:w}}function W_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function X_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ep(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,x,S,_,g){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:x,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:_,group:g},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=x,y.materialVariant=a(f),y.groupOrder=S,y.renderOrder=f.renderOrder,y.z=_,y.group=g),e++,y}function l(f,d,x,S,_,g,y){y.reversedDepth===!0&&(_=-_);let M=o(f,d,x,S,_,g);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function c(f,d,x,S,_,g){let y=o(f,d,x,S,_,g);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||X_),n.length>1&&n.sort(d||ep),s.length>1&&s.sort(d||ep)}function h(){for(let f=e,d=i.length;f<d;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function q_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new tp,i.set(n,[a])):s>=r.length?(a=new tp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Le};break;case"SpotLight":t={position:new H,direction:new H,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function K_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Z_=0;function J_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $_(i){let e=new Y_,t=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ht,a=new ht;function o(c){let u=0,h=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,x=0,S=0,_=0,g=0,y=0,M=0,v=0,T=0,w=0,m=0,E=0,B=0,C=0;c.sort(J_);for(let k=0,X=c.length;k<X;k++){let O=c[k],q=O.color,Z=O.intensity,J=O.distance,le=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Wi?le=O.shadow.map.texture:le=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=q.r*Z,h+=q.g*Z,f+=q.b*Z;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(O.sh.coefficients[ee],Z);C++}else if(O.isSunLight){let ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,re=t.get(O);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=le;let be=ae.getViewportCount();for(let xe=0;xe<be;xe++)n.sunShadowMatrix[S+xe]=ae.getMatrix(xe),n.sunShadowCascade[S+xe]=ae._cascadeData[xe];S+=be,x++}n.sun[d]=ee,d++}else if(O.isDirectionalLight){let ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,re=t.get(O);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,n.directionalShadow[_]=re,n.directionalShadowMap[_]=le,n.directionalShadowMatrix[_]=O.shadow.matrix,T++}n.directional[_]=ee,_++}else if(O.isSpotLight){let ee=e.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(q).multiplyScalar(Z),ee.distance=J,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,n.spot[y]=ee;let ae=O.shadow;if(O.map&&(n.spotLightMap[E]=O.map,E++,ae.updateMatrices(O),O.castShadow&&B++),n.spotLightMatrix[y]=ae.matrix,O.castShadow){let re=t.get(O);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,n.spotShadow[y]=re,n.spotShadowMap[y]=le,m++}y++}else if(O.isRectAreaLight){let ee=e.get(O);ee.color.copy(q).multiplyScalar(Z),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),n.rectArea[M]=ee,M++}else if(O.isPointLight){let ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){let ae=O.shadow,re=t.get(O);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,re.shadowCameraNear=ae.camera.near,re.shadowCameraFar=ae.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=O.shadow.matrix,w++}n.point[g]=ee,g++}else if(O.isHemisphereLight){let ee=e.get(O);ee.skyColor.copy(O.color).multiplyScalar(Z),ee.groundColor.copy(O.groundColor).multiplyScalar(Z),n.hemi[v]=ee,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let F=n.hash;(F.sunLength!==d||F.directionalLength!==_||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==M||F.hemiLength!==v||F.numSunShadows!==x||F.numDirectionalShadows!==T||F.numPointShadows!==w||F.numSpotShadows!==m||F.numSpotMaps!==E||F.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=_,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=C,F.sunLength=d,F.directionalLength=_,F.pointLength=g,F.spotLength=y,F.rectAreaLength=M,F.hemiLength=v,F.numSunShadows=x,F.numDirectionalShadows=T,F.numPointShadows=w,F.numSpotShadows=m,F.numSpotMaps=E,F.numLightProbes=C,n.version=Z_++)}function l(c,u){let h=0,f=0,d=0,x=0,S=0,_=0,g=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(v.isSpotLight){let T=n.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),x++}else if(v.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let T=n.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function np(i){let e=new $_(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new np(i),e.set(s,[o])):r>=a.length?(o=new np(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],nv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ip=new ht,Ua=new H,ah=new H;function iv(i,e,t){let n=new Bi,s=new he,r=new he,a=new Ct,o=new al,l=new ol,c={},u=t.maxTextureSize,h={[ni]:Gt,[Gt]:ni,[vn]:vn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:j_,fragmentShader:ev}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Pt;x.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new st(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let g=this.type;this.render=function(w,m,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Jf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ya);let B=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ei),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=g!==this.type;X&&m.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(q=>q.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,q=w.length;O<q;O++){let Z=w[O],J=Z.shadow;if(J===void 0){qe("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let le=J.getFrameExtents();s.multiply(le),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,J.mapSize.y=r.y));let ee=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ee,J.map===null||X===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Gi){if(Z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ot(s.x,s.y,{format:Wi,type:Bt,minFilter:xn,magFilter:xn,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Ti(s.x,s.y,On),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Mi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t}else Z.isPointLight?(J.map=new Oa(s.x),J.map.depthTexture=new jr(s.x,Xn)):(J.map=new Ot(s.x,s.y),J.map.depthTexture=new Ti(s.x,s.y,Xn)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Mi,this.type===ya?(J.map.depthTexture.compareFunction=ee?Wu:Gu,J.map.depthTexture.minFilter=xn,J.map.depthTexture.magFilter=xn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let ae=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,E);let re=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:E.layers;for(let be=0;be<ae;be++){let xe=J.getCamera(be);if(Z.isPointLight){let se=J.camera,de=J.matrix,Ee=Z.distance||se.far;Ee!==se.far&&(se.far=Ee,se.updateProjectionMatrix()),Ua.setFromMatrixPosition(Z.matrixWorld),se.position.copy(Ua),ah.copy(se.position),ah.add(tv[be]),se.up.copy(nv[be]),se.lookAt(ah),se.updateMatrixWorld(),de.makeTranslation(-Ua.x,-Ua.y,-Ua.z),ip.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ip,se.coordinateSystem,se.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,be),i.clear();else{be===0&&(i.setRenderTarget(J.map),i.clear());let se=J.getViewport(be);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),k.viewport(a)}n=J.getFrustum(be),v(m,E,xe,Z,re,this.type)}J.isPointLightShadow!==!0&&this.type===Gi&&y(J,E),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(B,C,F)};function y(w,m){let E=e.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ot(s.x,s.y,{format:Wi,type:Bt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(m,null,E,f,S,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(m,null,E,d,S,null)}function M(w,m,E,B){let C=null,F=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let k=C.uuid,X=m.uuid,O=c[k];O===void 0&&(O={},c[k]=O);let q=O[X];q===void 0&&(q=C.clone(),O[X]=q,m.addEventListener("dispose",T)),C=q}if(C.visible=m.visible,C.wireframe=m.wireframe,B===Gi?C.side=m.shadowSide!==null?m.shadowSide:m.side:C.side=m.shadowSide!==null?m.shadowSide:h[m.side],C.alphaMap=m.alphaMap,C.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,C.map=m.map,C.clipShadows=m.clipShadows,C.clippingPlanes=m.clippingPlanes,C.clipIntersection=m.clipIntersection,C.displacementMap=m.displacementMap,C.displacementScale=m.displacementScale,C.displacementBias=m.displacementBias,C.wireframeLinewidth=m.wireframeLinewidth,C.linewidth=m.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=E}return C}function v(w,m,E,B,C,F){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Gi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let O=e.update(w),q=w.material;if(Array.isArray(q)){let Z=O.groups;for(let J=0,le=Z.length;J<le;J++){let ee=Z[J],ae=q[ee.materialIndex];if(ae&&ae.visible){let re=M(w,ae,B,F);w.onBeforeShadow(i,w,m,E,O,re,ee),i.renderBufferDirect(E,null,O,re,w,ee),w.onAfterShadow(i,w,m,E,O,re,ee)}}}else if(q.visible){let Z=M(w,q,B,F);w.onBeforeShadow(i,w,m,E,O,Z,null),i.renderBufferDirect(E,null,O,Z,w,null),w.onAfterShadow(i,w,m,E,O,Z,null)}}let X=w.children;for(let O=0,q=X.length;O<q;O++)v(X[O],m,E,B,C,F)}function T(w){w.target.removeEventListener("dispose",T);for(let E in c){let B=c[E],C=w.target.uuid;C in B&&(B[C].dispose(),delete B[C])}}}function sv(i,e){function t(){let A=!1,z=new Ct,V=null,Y=new Ct(0,0,0,0);return{setMask:function($){V!==$&&!A&&(i.colorMask($,$,$,$),V=$)},setLocked:function($){A=$},setClear:function($,te,ue,pe,ce){ce===!0&&($*=pe,te*=pe,ue*=pe),z.set($,te,ue,pe),Y.equals(z)===!1&&(i.clearColor($,te,ue,pe),Y.copy(z))},reset:function(){A=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let A=!1,z=!1,V=null,Y=null,$=null;return{setReversed:function(te){if(z!==te){let ue=e.get("EXT_clip_control");te?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),z=te;let pe=$;$=null,this.setClear(pe)}},getReversed:function(){return z},setTest:function(te){te?ie(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(te){V!==te&&!A&&(i.depthMask(te),V=te)},setFunc:function(te){if(z&&(te=Rd[te]),Y!==te){switch(te){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=te}},setLocked:function(te){A=te},setClear:function(te){$!==te&&($=te,z&&(te=1-te),i.clearDepth(te))},reset:function(){A=!1,V=null,Y=null,$=null,z=!1}}}function s(){let A=!1,z=null,V=null,Y=null,$=null,te=null,ue=null,pe=null,ce=null;return{setTest:function(Ae){A||(Ae?ie(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Ae){z!==Ae&&!A&&(i.stencilMask(Ae),z=Ae)},setFunc:function(Ae,Be,_e){(V!==Ae||Y!==Be||$!==_e)&&(i.stencilFunc(Ae,Be,_e),V=Ae,Y=Be,$=_e)},setOp:function(Ae,Be,_e){(te!==Ae||ue!==Be||pe!==_e)&&(i.stencilOp(Ae,Be,_e),te=Ae,ue=Be,pe=_e)},setLocked:function(Ae){A=Ae},setClear:function(Ae){ce!==Ae&&(i.clearStencil(Ae),ce=Ae)},reset:function(){A=!1,z=null,V=null,Y=null,$=null,te=null,ue=null,pe=null,ce=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,x=[],S=null,_=!1,g=null,y=null,M=null,v=null,T=null,w=null,m=null,E=new Le(0,0,0),B=0,C=!1,F=null,k=null,X=null,O=null,q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,le=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=le>=1):ee.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=le>=2);let ae=null,re={},be=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),se=new Ct().fromArray(be),de=new Ct().fromArray(xe);function Ee(A,z,V,Y){let $=new Uint8Array(4),te=i.createTexture();i.bindTexture(A,te),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<V;ue++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(z+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return te}let ye={};ye[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(qs),Ce(!1),ve(Iu),ie(i.CULL_FACE),me(Ei);function ie(A){u[A]!==!0&&(i.enable(A),u[A]=!0)}function Ie(A){u[A]!==!1&&(i.disable(A),u[A]=!1)}function mt(A,z){return f[A]!==z?(i.bindFramebuffer(A,z),f[A]=z,A===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=z),A===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=z),!0):!1}function Fe(A,z){let V=x,Y=!1;if(A){V=d.get(z),V===void 0&&(V=[],d.set(z,V));let $=A.textures;if(V.length!==$.length||V[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ue=$.length;te<ue;te++)V[te]=i.COLOR_ATTACHMENT0+te;V.length=$.length,Y=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Y=!0);Y&&i.drawBuffers(V)}function He(A){return S!==A?(i.useProgram(A),S=A,!0):!1}let Xe={[xs]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};Xe[jf]=i.MIN,Xe[ed]=i.MAX;let oe={[td]:i.ZERO,[Ma]:i.ONE,[nd]:i.SRC_COLOR,[Nu]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[sd]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[lr]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[rd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function me(A,z,V,Y,$,te,ue,pe,ce,Ae){if(A===Ei){_===!0&&(Ie(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),A!==Ml){if(A!==g||Ae!==C){if((y!==xs||T!==xs)&&(i.blendEquation(i.FUNC_ADD),y=xs,T=xs),Ae)switch(A){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",A);break}else switch(A){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",A);break}M=null,v=null,w=null,m=null,E.set(0,0,0),B=0,g=A,C=Ae}return}$=$||z,te=te||V,ue=ue||Y,(z!==y||$!==T)&&(i.blendEquationSeparate(Xe[z],Xe[$]),y=z,T=$),(V!==M||Y!==v||te!==w||ue!==m)&&(i.blendFuncSeparate(oe[V],oe[Y],oe[te],oe[ue]),M=V,v=Y,w=te,m=ue),(pe.equals(E)===!1||ce!==B)&&(i.blendColor(pe.r,pe.g,pe.b,ce),E.copy(pe),B=ce),g=A,C=!1}function ge(A,z){A.side===vn?Ie(i.CULL_FACE):ie(i.CULL_FACE);let V=A.side===Gt;z&&(V=!V),Ce(V),A.blending===or&&A.transparent===!1?me(Ei):me(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let Y=A.stencilWrite;o.setTest(Y),Y&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Oe(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(A){F!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),F=A)}function ve(A){A!==Kf?(ie(i.CULL_FACE),A!==k&&(A===Iu?i.cullFace(i.BACK):A===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),k=A}function Ke(A){A!==X&&(J&&i.lineWidth(A),X=A)}function Oe(A,z,V){A?(ie(i.POLYGON_OFFSET_FILL),(O!==z||q!==V)&&(O=z,q=V,a.getReversed()&&(z=-z,V=-V),i.polygonOffset(z,V))):Ie(i.POLYGON_OFFSET_FILL)}function nt(A){A?ie(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function et(A){A===void 0&&(A=i.TEXTURE0+Z-1),ae!==A&&(i.activeTexture(A),ae=A)}function gt(A,z,V){V===void 0&&(ae===null?V=i.TEXTURE0+Z-1:V=ae);let Y=re[V];Y===void 0&&(Y={type:void 0,texture:void 0},re[V]=Y),(Y.type!==A||Y.texture!==z)&&(ae!==V&&(i.activeTexture(V),ae=V),i.bindTexture(A,z||ye[A]),Y.type=A,Y.texture=z)}function W(){let A=re[ae];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(A){Ze("WebGLState:",A)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(A){Ze("WebGLState:",A)}}function wt(){try{i.texSubImage2D(...arguments)}catch(A){Ze("WebGLState:",A)}}function Me(){try{i.texSubImage3D(...arguments)}catch(A){Ze("WebGLState:",A)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(A){Ze("WebGLState:",A)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(A){Ze("WebGLState:",A)}}function Ge(){try{i.texStorage2D(...arguments)}catch(A){Ze("WebGLState:",A)}}function U(){try{i.texStorage3D(...arguments)}catch(A){Ze("WebGLState:",A)}}function R(){try{i.texImage2D(...arguments)}catch(A){Ze("WebGLState:",A)}}function K(){try{i.texImage3D(...arguments)}catch(A){Ze("WebGLState:",A)}}function fe(A){return h[A]!==void 0?h[A]:i.getParameter(A)}function p(A,z){h[A]!==z&&(i.pixelStorei(A,z),h[A]=z)}function b(A){se.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),se.copy(A))}function L(A){de.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),de.copy(A))}function P(A,z){let V=c.get(z);V===void 0&&(V=new WeakMap,c.set(z,V));let Y=V.get(A);Y===void 0&&(Y=i.getUniformBlockIndex(z,A.name),i.uniformBlockBinding(z,Y,Y),V.set(A,Y))}function D(A,z,V){let $=c.get(z).get(A);l[$]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,$,V),l[$]=V)}function N(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},ae=null,re={},f={},l={},d=new WeakMap,x=[],S=null,_=!1,g=null,y=null,M=null,v=null,T=null,w=null,m=null,E=new Le(0,0,0),B=0,C=!1,F=null,k=null,X=null,O=null,q=null,se.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ie,bindFramebuffer:mt,drawBuffers:Fe,useProgram:He,setBlending:me,setMaterial:ge,setFlipSided:Ce,setCullFace:ve,setLineWidth:Ke,setPolygonOffset:Oe,setScissorTest:nt,activeTexture:et,bindTexture:gt,unbindTexture:W,compressedTexImage2D:Nt,compressedTexImage3D:it,texImage2D:R,texImage3D:K,pixelStorei:p,getParameter:fe,updateUBOMapping:P,uniformBlockBinding:D,texStorage2D:Ge,texStorage3D:U,texSubImage2D:wt,texSubImage3D:Me,compressedTexSubImage2D:bt,compressedTexSubImage3D:ke,scissor:b,viewport:L,reset:N}}function rv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,h=new Set,f,d=new WeakMap,x=new Set,S=new FinalizationRegistry(U=>x.delete(U)),_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return _?new OffscreenCanvas(U,R):kr("canvas")}function y(U,R,K){let fe=1,p=Ge(U);if((p.width>K||p.height>K)&&(fe=K/Math.max(p.width,p.height)),fe<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let b=Math.floor(fe*p.width),L=Math.floor(fe*p.height);f===void 0&&(f=g(b,L));let P=R?g(b,L):f;return P.width=b,P.height=L,P.getContext("2d").drawImage(U,0,0,b,L),qe("WebGLRenderer: Texture has been resized from ("+p.width+"x"+p.height+") to ("+b+"x"+L+")."),P}else return"data"in U&&qe("WebGLRenderer: Image in DataTexture is too big ("+p.width+"x"+p.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(U,R,K,fe,p,b=!1){if(U!==null){if(i[U]!==void 0)return i[U];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let L;fe&&(L=e.get("EXT_texture_norm16"),L||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=R;if(R===i.RED&&(K===i.FLOAT&&(P=i.R32F),K===i.HALF_FLOAT&&(P=i.R16F),K===i.UNSIGNED_BYTE&&(P=i.R8),K===i.UNSIGNED_SHORT&&L&&(P=L.R16_EXT),K===i.SHORT&&L&&(P=L.R16_SNORM_EXT)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.R8UI),K===i.UNSIGNED_SHORT&&(P=i.R16UI),K===i.UNSIGNED_INT&&(P=i.R32UI),K===i.BYTE&&(P=i.R8I),K===i.SHORT&&(P=i.R16I),K===i.INT&&(P=i.R32I)),R===i.RG&&(K===i.FLOAT&&(P=i.RG32F),K===i.HALF_FLOAT&&(P=i.RG16F),K===i.UNSIGNED_BYTE&&(P=i.RG8),K===i.UNSIGNED_SHORT&&L&&(P=L.RG16_EXT),K===i.SHORT&&L&&(P=L.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RG8UI),K===i.UNSIGNED_SHORT&&(P=i.RG16UI),K===i.UNSIGNED_INT&&(P=i.RG32UI),K===i.BYTE&&(P=i.RG8I),K===i.SHORT&&(P=i.RG16I),K===i.INT&&(P=i.RG32I)),R===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RGB8UI),K===i.UNSIGNED_SHORT&&(P=i.RGB16UI),K===i.UNSIGNED_INT&&(P=i.RGB32UI),K===i.BYTE&&(P=i.RGB8I),K===i.SHORT&&(P=i.RGB16I),K===i.INT&&(P=i.RGB32I)),R===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),K===i.UNSIGNED_INT&&(P=i.RGBA32UI),K===i.BYTE&&(P=i.RGBA8I),K===i.SHORT&&(P=i.RGBA16I),K===i.INT&&(P=i.RGBA32I)),R===i.RGB&&(K===i.UNSIGNED_SHORT&&L&&(P=L.RGB16_EXT),K===i.SHORT&&L&&(P=L.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),R===i.RGBA){let D=b?Vr:ut.getTransfer(p);K===i.FLOAT&&(P=i.RGBA32F),K===i.HALF_FLOAT&&(P=i.RGBA16F),K===i.UNSIGNED_BYTE&&(P=D===yt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&L&&(P=L.RGBA16_EXT),K===i.SHORT&&L&&(P=L.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function m(U,R){let K;return U?R===null||R===Xn||R===ys?K=i.DEPTH24_STENCIL8:R===On?K=i.DEPTH32F_STENCIL8:R===ur&&(K=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Xn||R===ys?K=i.DEPTH_COMPONENT24:R===On?K=i.DEPTH_COMPONENT32F:R===ur&&(K=i.DEPTH_COMPONENT16),K}function E(U,R){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==$t&&U.minFilter!==xn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function B(U){let R=new WeakRef(U);n.get(U).__ref=R,x.add(R),S.register(U,R,R)}function C(U){let R=n.get(U).__ref;R!==void 0&&(x.delete(R),S.unregister(R))}function F(U){X(U.target)}function k(U){O(U.target)}function X(U){U.removeEventListener("dispose",F),C(U),Z(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&h.delete(U)}function O(U){U.removeEventListener("dispose",k),C(U),le(U)}function q(){for(let U of x){let R=U.deref();R!==void 0&&(R.isRenderTarget===!0?O(R):X(R))}x.clear(),h.clear()}function Z(U){let R=n.get(U);if(R.__webglInit===void 0)return;let K=U.source,fe=d.get(K);if(fe){let p=fe[R.__cacheKey];p.usedTimes--,p.usedTimes===0&&J(U),Object.keys(fe).length===0&&d.delete(K)}n.remove(U)}function J(U){let R=n.get(U);i.deleteTexture(R.__webglTexture);let K=U.source,fe=d.get(K);delete fe[R.__cacheKey],a.memory.textures--}function le(U){let R=n.get(U);R.__depthDisposeCallback&&R.__depthDisposeCallback();let K=U.depthTexture;if(K&&K.renderTarget===U&&X(K),U.isWebGLCubeRenderTarget)for(let p=0;p<6;p++){if(Array.isArray(R.__webglFramebuffer[p]))for(let b=0;b<R.__webglFramebuffer[p].length;b++)i.deleteFramebuffer(R.__webglFramebuffer[p][b]);else i.deleteFramebuffer(R.__webglFramebuffer[p]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[p])}else{if(Array.isArray(R.__webglFramebuffer))for(let p=0;p<R.__webglFramebuffer.length;p++)i.deleteFramebuffer(R.__webglFramebuffer[p]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let p=0;p<R.__webglColorRenderbuffer.length;p++)R.__webglColorRenderbuffer[p]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[p]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let fe=U.textures;for(let p=0,b=fe.length;p<b;p++){let L=n.get(fe[p]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(fe[p])}n.remove(U)}let ee=0;function ae(){ee=0}function re(){return ee}function be(U){ee=U}function xe(){let U=ee;return U>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),ee+=1,U}function se(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.mipmapsAutoUpdate),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function de(U,R){let K=n.get(U);if(U.isVideoTexture&&bt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){let fe=U.image;if(fe===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(K,U,R);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function Ee(U,R){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){ge(K,U,R);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function ye(U,R){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){ge(K,U,R);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function ie(U,R){let K=n.get(U);if(U.version>0&&K.__version!==U.version){Ce(K,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}let Ie={[us]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},mt={[$t]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Fe={[vd]:i.NEVER,[Xu]:i.ALWAYS,[yd]:i.LESS,[Gu]:i.LEQUAL,[Md]:i.EQUAL,[Wu]:i.GEQUAL,[Sd]:i.GREATER,[bd]:i.NOTEQUAL};function He(U,R){if(R.type===On&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===xn||R.magFilter===Tl||R.magFilter===Ra||R.magFilter===Ai||R.minFilter===xn||R.minFilter===Tl||R.minFilter===Ra||R.minFilter===Ai)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ie[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ie[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ie[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,mt[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,mt[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Fe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===$t||R.minFilter!==Ra&&R.minFilter!==Ai||R.type===On&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Xe(U,R){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",F),B(R));let fe=R.source,p=d.get(fe);p===void 0&&(p={},d.set(fe,p));let b=se(R);if(b!==U.__cacheKey){p[b]===void 0&&(p[b]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),p[b].usedTimes++;let L=p[U.__cacheKey];L!==void 0&&(p[U.__cacheKey].usedTimes--,L.usedTimes===0&&J(R)),U.__cacheKey=b,U.__webglTexture=p[b].texture}return K}function oe(U,R,K){return Math.floor(Math.floor(U/K)/R)}function me(U,R,K,fe){let b=U.updateRanges;if(b.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,K,fe,R.data);else{b.sort((A,z)=>A.start-z.start);let L=0;for(let A=1;A<b.length;A++){let z=b[L],V=b[A],Y=z.start+z.count,$=oe(V.start,R.width,4),te=oe(z.start,R.width,4);V.start<=Y+1&&$===te&&oe(V.start+V.count-1,R.width,4)===$?z.count=Math.max(z.count,V.start+V.count-z.start):(++L,b[L]=V)}b.length=L+1;let P=t.getParameter(i.UNPACK_ROW_LENGTH),D=t.getParameter(i.UNPACK_SKIP_PIXELS),N=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let A=0,z=b.length;A<z;A++){let V=b[A],Y=Math.floor(V.start/4),$=Math.ceil(V.count/4),te=Y%R.width,ue=Math.floor(Y/R.width),pe=$,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue),t.texSubImage2D(i.TEXTURE_2D,0,te,ue,pe,ce,K,fe,R.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,P),t.pixelStorei(i.UNPACK_SKIP_PIXELS,D),t.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function ge(U,R,K){let fe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(fe=i.TEXTURE_3D);let p=Xe(U,R),b=R.source;t.bindTexture(fe,U.__webglTexture,i.TEXTURE0+K);let L=n.get(b);if(b.version!==L.__version||p===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap!="undefined"&&R.image instanceof ImageBitmap)===!1){let ce=ut.getPrimaries(ut.workingColorSpace),Ae=R.colorSpace===Ri?null:ut.getPrimaries(R.colorSpace),Be=R.colorSpace===Ri||ce===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let D=y(R.image,!1,s.maxTextureSize);D=ke(R,D);let N=r.convert(R.format,R.colorSpace),A=r.convert(R.type),z=w(R.internalFormat,N,A,R.normalized,R.colorSpace,R.isVideoTexture);He(fe,R);let V,Y=R.mipmaps,$=R.isVideoTexture!==!0,te=L.__version===void 0||p===!0,ue=b.dataReady,pe=E(R,D);if(R.isDepthTexture)z=m(R.format===wi,R.type),te&&($?t.texStorage2D(i.TEXTURE_2D,1,z,D.width,D.height):t.texImage2D(i.TEXTURE_2D,0,z,D.width,D.height,0,N,A,null));else if(R.isDataTexture)if(Y.length>0){$&&te&&t.texStorage2D(i.TEXTURE_2D,pe,z,Y[0].width,Y[0].height);for(let ce=0,Ae=Y.length;ce<Ae;ce++)V=Y[ce],$?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,V.width,V.height,N,A,V.data):t.texImage2D(i.TEXTURE_2D,ce,z,V.width,V.height,0,N,A,V.data);R.generateMipmaps=!1}else $?(te&&t.texStorage2D(i.TEXTURE_2D,pe,z,D.width,D.height),ue&&me(R,D,N,A)):t.texImage2D(i.TEXTURE_2D,0,z,D.width,D.height,0,N,A,D.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){$&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,z,Y[0].width,Y[0].height,D.depth);for(let ce=0,Ae=Y.length;ce<Ae;ce++)if(V=Y[ce],R.format!==qn)if(N!==null)if($){if(ue)if(R.layerUpdates.size>0){let Be=ju(V.width,V.height,R.format,R.type);for(let _e of R.layerUpdates){let ct=V.data.subarray(_e*Be/V.data.BYTES_PER_ELEMENT,(_e+1)*Be/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,_e,V.width,V.height,1,N,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,V.width,V.height,D.depth,N,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,z,V.width,V.height,D.depth,0,V.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,V.width,V.height,D.depth,N,A,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,z,V.width,V.height,D.depth,0,N,A,V.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{$&&te&&t.texStorage2D(i.TEXTURE_2D,pe,z,Y[0].width,Y[0].height);for(let ce=0,Ae=Y.length;ce<Ae;ce++)V=Y[ce],R.format!==qn?N!==null?$?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,V.width,V.height,N,V.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,z,V.width,V.height,0,V.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,V.width,V.height,N,A,V.data):t.texImage2D(i.TEXTURE_2D,ce,z,V.width,V.height,0,N,A,V.data)}else if(R.isDataArrayTexture)if($){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,z,D.width,D.height,D.depth),ue)if(R.layerUpdates.size>0){let ce=ju(D.width,D.height,R.format,R.type);for(let Ae of R.layerUpdates){let Be=D.data.subarray(Ae*ce/D.data.BYTES_PER_ELEMENT,(Ae+1)*ce/D.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,D.width,D.height,1,N,A,Be)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,N,A,D.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,z,D.width,D.height,D.depth,0,N,A,D.data);else if(R.isData3DTexture)$?(te&&t.texStorage3D(i.TEXTURE_3D,pe,z,D.width,D.height,D.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,N,A,D.data)):t.texImage3D(i.TEXTURE_3D,0,z,D.width,D.height,D.depth,0,N,A,D.data);else if(R.isFramebufferTexture){if(te)if($)t.texStorage2D(i.TEXTURE_2D,pe,z,D.width,D.height);else{let ce=D.width,Ae=D.height;for(let Be=0;Be<pe;Be++)t.texImage2D(i.TEXTURE_2D,Be,z,ce,Ae,0,N,A,null),ce>>=1,Ae>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),D.parentNode!==ce){ce.appendChild(D),h.add(R),ce.onpaint=Ae=>{let Be=Ae.changedElements;for(let _e of h)Be.includes(_e.image)&&(_e.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,D);else{let Be=i.RGBA,_e=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,_e,ct,D)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Y.length>0){if($&&te){let ce=Ge(Y[0]);t.texStorage2D(i.TEXTURE_2D,pe,z,ce.width,ce.height)}for(let ce=0,Ae=Y.length;ce<Ae;ce++)V=Y[ce],$?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,N,A,V):t.texImage2D(i.TEXTURE_2D,ce,z,N,A,V);R.generateMipmaps=!1}else if($){if(te){let ce=Ge(D);t.texStorage2D(i.TEXTURE_2D,pe,z,ce.width,ce.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,A,D)}else t.texImage2D(i.TEXTURE_2D,0,z,N,A,D);M(R)&&R.mipmapsAutoUpdate===!0&&v(fe),L.__version=b.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Ce(U,R,K){if(R.image.length!==6)return;let fe=Xe(U,R),p=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let b=n.get(p);if(p.version!==b.__version||fe===!0){t.activeTexture(i.TEXTURE0+K);let L=ut.getPrimaries(ut.workingColorSpace),P=R.colorSpace===Ri?null:ut.getPrimaries(R.colorSpace),D=R.colorSpace===Ri||L===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let N=R.isCompressedTexture||R.image[0].isCompressedTexture,A=R.image[0]&&R.image[0].isDataTexture,z=[];for(let _e=0;_e<6;_e++)!N&&!A?z[_e]=y(R.image[_e],!0,s.maxCubemapSize):z[_e]=A?R.image[_e].image:R.image[_e],z[_e]=ke(R,z[_e]);let V=z[0],Y=r.convert(R.format,R.colorSpace),$=r.convert(R.type),te=w(R.internalFormat,Y,$,R.normalized,R.colorSpace),ue=R.isVideoTexture!==!0,pe=b.__version===void 0||fe===!0,ce=p.dataReady,Ae=E(R,V);He(i.TEXTURE_CUBE_MAP,R);let Be;if(R.isDepthTexture){if(te=m(R.format===wi,R.type),pe)if(ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,te,V.width,V.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,V.width,V.height,0,Y,$,null)}else if(N){ue&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,te,V.width,V.height);for(let _e=0;_e<6;_e++){Be=z[_e].mipmaps;for(let ct=0;ct<Be.length;ct++){let Et=Be[ct];R.format!==qn?Y!==null?ue?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,0,0,Et.width,Et.height,Y,Et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,te,Et.width,Et.height,0,Et.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,0,0,Et.width,Et.height,Y,$,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,te,Et.width,Et.height,0,Y,$,Et.data)}}}else{if(Be=R.mipmaps,ue&&pe){Be.length>0&&Ae++;let _e=Ge(z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,te,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(A){ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,z[_e].width,z[_e].height,Y,$,z[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,z[_e].width,z[_e].height,0,Y,$,z[_e].data);for(let ct=0;ct<Be.length;ct++){let In=Be[ct].image[_e].image;ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,0,0,In.width,In.height,Y,$,In.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,te,In.width,In.height,0,Y,$,In.data)}}else{ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Y,$,z[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,Y,$,z[_e]);for(let ct=0;ct<Be.length;ct++){let Et=Be[ct];ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,0,0,Y,$,Et.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,te,Y,$,Et.image[_e])}}}M(R)&&R.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),b.__version=p.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ve(U,R,K,fe,p,b){let L=r.convert(K.format,K.colorSpace),P=r.convert(K.type),D=w(K.internalFormat,L,P,K.normalized,K.colorSpace),N=n.get(R),A=n.get(K);if(A.__renderTarget=R,!N.__hasExternalTextures){let z=Math.max(1,R.width>>b),V=Math.max(1,R.height>>b);p===i.TEXTURE_3D||p===i.TEXTURE_2D_ARRAY?t.texImage3D(p,b,D,z,V,R.depth,0,L,P,null):t.texImage2D(p,b,D,z,V,0,L,P,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,p,A.__webglTexture,0,wt(R)):(p===i.TEXTURE_2D||p>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&p<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,p,A.__webglTexture,b),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(U,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){let fe=R.depthTexture,p=fe&&fe.isDepthTexture?fe.type:null,b=m(R.stencilBuffer,p),L=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),b,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),b,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,b,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,U)}else{let fe=R.textures;for(let p=0;p<fe.length;p++){let b=fe[p],L=r.convert(b.format,b.colorSpace),P=r.convert(b.type),D=w(b.internalFormat,L,P,b.normalized,b.colorSpace);Me(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),D,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),D,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,D,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(U,R,K){let fe=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let p=n.get(R.depthTexture);p.__renderTarget=R;let b=fe?R.depthTexture.image[0]:R.depthTexture.image;(!p.__webglTexture||b.width!==R.width||b.height!==R.height)&&(b.width=R.width,b.height=R.height,R.depthTexture.needsUpdate=!0),fe?ie(R.depthTexture,0):de(R.depthTexture,0);let L=p.__webglTexture,P=wt(R),D=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,N=R.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===Mi)Me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,N,D,L,0);else if(R.depthTexture.format===wi)Me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,N,D,L,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let R=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let fe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),fe){let p=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,fe.removeEventListener("dispose",p)};fe.addEventListener("dispose",p),R.__depthDisposeCallback=p}R.__boundDepthTexture=fe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let fe=0;fe<6;fe++)Oe(R.__webglFramebuffer[fe],U,fe);else U.texture.mipmaps.length>0?Oe(R.__webglFramebuffer[0],U,0):Oe(R.__webglFramebuffer,U,0);else if(K){R.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[fe]),R.__webglDepthbuffer[fe]===void 0)R.__webglDepthbuffer[fe]=i.createRenderbuffer(),Ke(R.__webglDepthbuffer[fe],U,!1);else{let p=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=R.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,b),i.framebufferRenderbuffer(i.FRAMEBUFFER,p,i.RENDERBUFFER,b)}}else if(U.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ke(R.__webglDepthbuffer,U,!1);else{let p=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,b),i.framebufferRenderbuffer(i.FRAMEBUFFER,p,i.RENDERBUFFER,b)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(U,R,K){let fe=n.get(U);R!==void 0&&ve(fe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&nt(U)}function gt(U){let R=U.texture,K=n.get(U),fe=n.get(R);U.addEventListener("dispose",k),B(U);let p=U.textures,b=U.isWebGLCubeRenderTarget===!0,L=p.length>1;if(L||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=R.version,a.memory.textures++),b){K.__webglFramebuffer=[];for(let P=0;P<6;P++)if(R.mipmaps.length>0){K.__webglFramebuffer[P]=[];for(let D=0;D<R.mipmaps.length;D++)K.__webglFramebuffer[P][D]=i.createFramebuffer()}else K.__webglFramebuffer[P]=i.createFramebuffer()}else{if(R.mipmaps.length>0){K.__webglFramebuffer=[];for(let P=0;P<R.mipmaps.length;P++)K.__webglFramebuffer[P]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(L)for(let P=0,D=p.length;P<D;P++){let N=n.get(p[P]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Me(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let P=0;P<p.length;P++){let D=p[P];K.__webglColorRenderbuffer[P]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[P]);let N=r.convert(D.format,D.colorSpace),A=r.convert(D.type),z=w(D.internalFormat,N,A,D.normalized,D.colorSpace,U.isXRRenderTarget===!0),V=wt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,z,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,K.__webglColorRenderbuffer[P])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(b){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),He(i.TEXTURE_CUBE_MAP,R);for(let P=0;P<6;P++)if(R.mipmaps.length>0)for(let D=0;D<R.mipmaps.length;D++)ve(K.__webglFramebuffer[P][D],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,D);else ve(K.__webglFramebuffer[P],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);M(R)?v(i.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(L){for(let P=0,D=p.length;P<D;P++){let N=p[P],A=n.get(N),z=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(z=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,A.__webglTexture),He(z,N),ve(K.__webglFramebuffer,U,N,i.COLOR_ATTACHMENT0+P,z,0),M(N)&&v(z)}t.unbindTexture()}else{let P=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(P=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(P,fe.__webglTexture),He(P,R),R.mipmaps.length>0)for(let D=0;D<R.mipmaps.length;D++)ve(K.__webglFramebuffer[D],U,R,i.COLOR_ATTACHMENT0,P,D);else ve(K.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,P,0);M(R)?v(P):R.mipmaps.length>0&&i.texParameteri(P,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}U.depthBuffer&&nt(U)}function W(U){let R=U.textures;for(let K=0,fe=R.length;K<fe;K++){let p=R[K];if(M(p)&&p.mipmapsAutoUpdate===!0){let b=T(U),L=n.get(p).__webglTexture;t.bindTexture(b,L),v(b),t.unbindTexture()}}}let Nt=[];function it(U){if(U.samples>0){if(Me(U)===!1){let R=U.textures,K=U.width,fe=U.height,p=i.COLOR_BUFFER_BIT,b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=n.get(U),P=R.length>1;if(P)for(let N=0;N<R.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let N=0;N<R.length;N++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(p|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(p|=i.STENCIL_BUFFER_BIT)),P){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,L.__webglColorRenderbuffer[N]);let A=n.get(R[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,A,0)}i.blitFramebuffer(0,0,K,fe,0,0,K,fe,p,i.NEAREST),l===!0&&(Nt.length=0,Nt.push(i.COLOR_ATTACHMENT0+N),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Nt.push(b),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),P)for(let N=0;N<R.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,L.__webglColorRenderbuffer[N]);let A=n.get(R[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,A,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function wt(U){return Math.min(s.maxSamples,U.samples)}function Me(U){let R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function bt(U){let R=a.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function ke(U,R){let K=U.colorSpace,fe=U.format,p=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==zr&&K!==Ri&&(ut.getTransfer(K)===yt?(fe!==qn||p!==yn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",K)),R}function Ge(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=xe,this.resetTextureUnits=ae,this.getTextureUnits=re,this.setTextureUnits=be,this.setTexture2D=de,this.setTexture2DArray=Ee,this.setTexture3D=ye,this.setTextureCube=ie,this.rebindTextures=et,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Me,this.dispose=q}function av(i,e){function t(n,s=Ri){let r,a=ut.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Bt)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===Hu)return i.RGB;if(n===qn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===La)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Ol||n===Bl||n===zl||n===Vl||n===Da||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Ol)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return r.COMPRESSED_R11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===$l||n===Ql||n===jl||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ac||n===Na||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:ov,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,x=null,S=typeof XRWebGLBinding!="undefined",_=new dh,g={},y=t.getContextAttributes(),M=null,v=null,T=[],w=[],m=new he,E=null,B=null,C=new hn;C.viewport=new Ct;let F=new hn;F.viewport=new Ct;let k=[C,F],X=new vl,O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=T[se];return de===void 0&&(de=new Js,T[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=T[se];return de===void 0&&(de=new Js,T[se]=de),de.getGripSpace()},this.getHand=function(se){let de=T[se];return de===void 0&&(de=new Js,T[se]=de),de.getHandSpace()};function Z(se){let de=w.indexOf(se.inputSource);if(de===-1)return;let Ee=T[de];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,c||a),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",le);for(let se=0;se<T.length;se++){let de=w[se];de!==null&&(w[se]=null,T[se].disconnect(de))}O=null,q=null,_.reset();for(let se in g)delete g[se];if(e.setRenderTarget(M),d=null,f=null,h=null,s=null,v=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(m.width,m.height,!1),B!==null){let se=B.camera;se.fov=B.fov,se.zoom=B.zoom,se.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(m),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ye=null,ie=null;y.depth&&(ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?wi:Mi,ye=y.stencil?ys:Xn);let Ie={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ot(f.textureWidth,f.textureHeight,{format:qn,type:yn,depthTexture:new Ti(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ot(d.framebufferWidth,d.framebufferHeight,{format:qn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function le(se){for(let de=0;de<se.removed.length;de++){let Ee=se.removed[de],ye=w.indexOf(Ee);ye>=0&&(w[ye]=null,T[ye].disconnect(Ee))}for(let de=0;de<se.added.length;de++){let Ee=se.added[de],ye=w.indexOf(Ee);if(ye===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=w.length){w.push(Ee),ye=Ie;break}else if(w[Ie]===null){w[Ie]=Ee,ye=Ie;break}if(ye===-1)break}let ie=T[ye];ie&&ie.connect(Ee)}}function ee(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let de=se.near,Ee=se.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),X.near=F.near=C.near=de,X.far=F.far=C.far=Ee,(O!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),O=X.near,q=X.far),X.layers.mask=se.layers.mask|6,C.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;let ye=se.parent,ie=X.cameras;ee(X,ye);for(let Ie=0;Ie<ie.length;Ie++)ee(ie[Ie],ye);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),B===null&&se.isPerspectiveCamera&&(B={camera:se,fov:se.fov,zoom:se.zoom}),ae(se,X,ye)};function ae(se,de,Ee){Ee===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=qo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(X)},this.getCameraTexture=function(se){return g[se]};let re=null;function be(se,de){if(u=de.getViewerPose(c||a),x=de,u!==null){let Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ye=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,ye=!0);for(let Fe=0;Fe<Ee.length;Fe++){let He=Ee[Fe],Xe=null;if(d!==null)Xe=d.getViewport(He);else{let me=h.getViewSubImage(f,He);Xe=me.viewport,Fe===0&&(e.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(v))}let oe=k[Fe];oe===void 0&&(oe=new hn,oe.layers.enable(Fe),oe.viewport=new Ct,k[Fe]=oe),oe.matrix.fromArray(He.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(He.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Fe===0&&(X.matrix.copy(oe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ye===!0&&X.cameras.push(oe)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=n.getBinding();let Fe=h.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(Fe,s.renderState)}if(ie&&ie.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<Ee.length;Fe++){let He=Ee[Fe].camera;if(He){let Xe=g[He];Xe||(Xe=new ea,g[He]=Xe);let oe=h.getCameraImage(He);Xe.sourceTexture=oe}}}}for(let Ee=0;Ee<T.length;Ee++){let ye=w[Ee],ie=T[Ee];ye!==null&&ie!==void 0&&ie.update(ye,de,c||a)}re&&re(se,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let xe=new sp;xe.setAnimationLoop(be),this.setAnimationLoop=function(se){re=se},this.dispose=function(){}}},cv=new ht,pp=new $e;pp.set(-1,0,0,0,1,0,0,0,1);function uv(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Ju(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),h(_,g)):g.isMeshPhongMaterial?(r(_,g),u(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),f(_,g),g.isMeshPhysicalMaterial&&d(_,g,v)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),S(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,y,M):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Gt&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Gt&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,v=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(pp),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,M){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=M*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function d(_,g,y){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gt&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function S(_,g){let y=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,e,t,n){let s={},r={};function a(y,M){let v=M.program;n.uniformBlockBinding(y,v,s[y.id])}function o(y,M){let v=s[y.id];v===void 0&&(x(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",_));let T=M.program;n.updateUBOMapping(y,T);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let M=i.createBuffer(),v=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,m=v.length;w<m;w++){let E=v[w];if(Array.isArray(E))for(let B=0,C=E.length;B<C;B++)u(E[B],w,B,T);else u(E,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,v,T){if(f(y,M,v,T)===!0){let w=y.__offset,m=y.value;if(Array.isArray(m)){let E=0;for(let B=0;B<m.length;B++){let C=m[B],F=S(C,!0);h(C,y.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function h(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function f(y,M,v,T){let w=y.value,m=M+"_"+v;if(Array.isArray(w)){T[m]===void 0&&(T[m]=[]);let E=T[m],B=!1;for(let C=0;C<w.length;C++)d(w[C],E,C)===!0&&(B=!0);return B}return d(w,T,m)}function d(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let T=M[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function x(y){let M=y.uniforms,v=0,T=16;for(let m=0,E=M.length;m<E;m++){let B=Array.isArray(M[m])?M[m]:[M[m]];for(let C=0,F=B.length;C<F;C++){let k=B[C],X=Array.isArray(k.value)?k.value:[k.value],O=Array.isArray(M[m])||Array.isArray(k.value),q=v;for(let J=0,le=X.length;J<le;J++){let ee=X[J],ae=S(ee,O),re=v%T,be=re%ae.boundary,xe=re+be;v+=be,xe!==0&&T-xe<ae.storage&&(v+=T-xe),J===0&&(q=v),v+=ae.storage}let Z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Z((v-q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=q}}let w=v%T;return w>0&&(v+=T-w),y.__size=v,y.__cache={},this}function S(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function _(y){let M=y.target;M.removeEventListener("dispose",_),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function dv(){return si===null&&(si=new Yr(fv,16,16,Wi,Bt),si.name="DFG_LUT",si.minFilter=xn,si.magFilter=xn,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var hc=class{constructor(e={}){let{canvas:t=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=d,_=new Set([Il,Pl,Cl]),g=new Set([yn,Xn,ur,ys,Al,wl]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,w=null,m=[],E=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,k=null,X=null,O=null,q=null;this._outputColorSpace=un;let Z=0,J=0,le=null,ee=-1,ae=null,re=new Ct,be=new Ct,xe=null,se=new Le(0),de=0,Ee=t.width,ye=t.height,ie=1,Ie=null,mt=null,Fe=new Ct(0,0,Ee,ye),He=new Ct(0,0,Ee,ye),Xe=!1,oe=new Bi,me=new Jo,ge=!1,Ce=!1,ve=new ht,Ke=new H,Oe=new Ct,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function gt(){return le===null?ie:1}let W=n;function Nt(I,G){return t.getContext(I,G)}let it,wt,Me,bt,ke,Ge,U,R,K,fe,p,b,L,P,D,N,A,z,V,Y,$,te,ue;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),W===null){let G="webgl2";if(W=Nt(G,I),W===null)throw Nt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(I){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ze("WebGLRenderer: "+I.message),I}function pe(){it=new Tx(W),it.init(),$=new av(W,it),wt=new dx(W,it,e,$),Me=new sv(W,it),wt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),X=W.createFramebuffer(),O=W.createFramebuffer(),q=W.createFramebuffer(),bt=new wx(W),ke=new W_,Ge=new rv(W,it,Me,ke,wt,$,bt),U=new bx(C),R=new Cm(W),te=new hx(W,R),K=new Ex(W,R,bt,te),fe=new Cx(W,K,R,te,bt),z=new Rx(W,wt,Ge),D=new px(ke),p=new G_(C,U,it,wt,te,D),b=new uv(C,ke),L=new q_,P=new Q_(it),A=new ux(C,U,Me,fe,x,l),N=new iv(C,fe,wt),ue=new hv(W,bt,wt,Me),V=new fx(W,it,bt),Y=new Ax(W,it,bt),bt.programs=p.programs,C.capabilities=wt,C.extensions=it,C.properties=ke,C.renderLists=L,C.shadowMap=N,C.state=Me,C.info=bt}S!==yn&&(B=new Ix(S,t.width,t.height,o,s,r));let ce=new ph(C,W);this.xr=ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(Ee,ye,!1))},this.getSize=function(I){return I.set(Ee,ye)},this.setSize=function(I,G,ne=!0){if(ce.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=I,ye=G,t.width=Math.floor(I*ie),t.height=Math.floor(G*ie),ne===!0&&(t.style.width=I+"px",t.style.height=G+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(Ee*ie,ye*ie).floor()},this.setDrawingBufferSize=function(I,G,ne){Ee=I,ye=G,ie=ne,t.width=Math.floor(I*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(S===yn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(re)},this.getViewport=function(I){return I.copy(Fe)},this.setViewport=function(I,G,ne,Q){I.isVector4?Fe.set(I.x,I.y,I.z,I.w):Fe.set(I,G,ne,Q),Me.viewport(re.copy(Fe).multiplyScalar(gt()).round())},this.getScissor=function(I){return I.copy(He)},this.setScissor=function(I,G,ne,Q){I.isVector4?He.set(I.x,I.y,I.z,I.w):He.set(I,G,ne,Q),Me.scissor(be.copy(He).multiplyScalar(gt()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(I){Me.setScissorTest(Xe=I)},this.setOpaqueSort=function(I){Ie=I},this.setTransparentSort=function(I){mt=I},this.getClearColor=function(I){return I.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,ne=!0){let Q=0;if(I){let j=!1;if(le!==null){let Te=le.texture.format;j=_.has(Te)}if(j){let Te=le.texture.type,De=g.has(Te),Se=A.getClearColor(),Re=A.getClearAlpha(),ze=Se.r,tt=Se.g,ft=Se.b;De?(y[0]=ze,y[1]=tt,y[2]=ft,y[3]=Re,W.clearBufferuiv(W.COLOR,0,y)):(M[0]=ze,M[1]=tt,M[2]=ft,M[3]=Re,W.clearBufferiv(W.COLOR,0,M))}else Q|=W.COLOR_BUFFER_BIT}G&&(Q|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),k=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),A.dispose(),L.dispose(),P.dispose(),Ge.dispose(),ke.dispose(),U.dispose(),fe.dispose(),K.dispose(),te.dispose(),ue.dispose(),p.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",fi),ce.removeEventListener("sessionend",tf),ts.stop()};function Ae(I){I.preventDefault(),Yu("WebGLRenderer: Context Lost."),F=!0}function Be(){Yu("WebGLRenderer: Context Restored."),F=!1;let I=bt.autoReset,G=N.enabled,ne=N.autoUpdate,Q=N.needsUpdate,j=N.type;pe(),bt.autoReset=I,N.enabled=G,N.autoUpdate=ne,N.needsUpdate=Q,N.type=j}function _e(I){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ct(I){let G=I.target;G.removeEventListener("dispose",ct),Et(G)}function Et(I){In(I),ke.remove(I)}function In(I){let G=ke.get(I).programs;G!==void 0&&(G.forEach(function(ne){p.releaseProgram(ne)}),I.isShaderMaterial&&p.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,ne,Q,j,Te){G===null&&(G=nt);let De=j.isMesh&&j.matrixWorld.determinantAffine()<0,Se=p0(I,G,ne,Q,j);Me.setMaterial(Q,De);let Re=ne.index,ze=1;if(Q.wireframe===!0){if(Re=K.getWireframeAttribute(ne),Re===void 0)return;ze=2}let tt=ne.drawRange,ft=ne.attributes.position,Ne=tt.start*ze,dt=(tt.start+tt.count)*ze;Te!==null&&(Ne=Math.max(Ne,Te.start*ze),dt=Math.min(dt,(Te.start+Te.count)*ze)),Re!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Re.count)):ft!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,ft.count));let kt=dt-Ne;if(kt<0||kt===1/0)return;te.setup(j,Q,Se,ne,Re);let It,Rt=V;if(Re!==null&&(It=R.get(Re),Rt=Y,Rt.setIndex(It)),j.isMesh)Q.wireframe===!0?(Me.setLineWidth(Q.wireframeLinewidth*gt()),Rt.setMode(W.LINES)):Rt.setMode(W.TRIANGLES);else if(j.isLine){let an=Q.linewidth;an===void 0&&(an=1),Me.setLineWidth(an*gt()),j.isLineSegments?Rt.setMode(W.LINES):j.isLineLoop?Rt.setMode(W.LINE_LOOP):Rt.setMode(W.LINE_STRIP)}else j.isPoints?Rt.setMode(W.POINTS):j.isSprite&&Rt.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let an=j._multiDrawStarts,Ue=j._multiDrawCounts,gn=j._multiDrawCount,Tt=Re?R.get(Re).bytesPerElement:1,ns=ke.get(Q).currentProgram.getUniforms();for(let on=0;on<gn;on++)ns.setValue(W,"_gl_DrawID",on),Rt.render(an[on]/Tt,Ue[on])}else if(j.isInstancedMesh)Rt.renderInstances(Ne,kt,j.count);else if(ne.isInstancedBufferGeometry){let an=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ue=Math.min(ne.instanceCount,an);Rt.renderInstances(Ne,kt,Ue)}else Rt.render(Ne,kt)};function eo(I,G,ne,Q){k!==null&&I.isNodeMaterial&&k.setObject(Q,I),ge===!0&&D.setState(I,ne,!1),I.transparent===!0&&I.side===vn&&I.forceSinglePass===!1?(I.side=Gt,I.needsUpdate=!0,wr(I,G,Q),I.side=ni,I.needsUpdate=!0,wr(I,G,Q),I.side=vn):wr(I,G,Q)}this.compile=function(I,G,ne=null){ne===null&&(ne=I),k!==null&&k.renderStart(I,G,ne),w=P.get(ne),w.init(G),E.push(w),ne.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),I!==ne&&I.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),Ce=this.localClippingEnabled,ge=D.init(this.clippingPlanes,Ce),ge===!0&&D.setGlobalState(this.clippingPlanes,G),k!==null&&N.render(w.state.shadowsArray,ne,G);let Q=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Te=j.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){let Se=Te[De];eo(Se,ne,G,j),Q.add(Se)}else eo(Te,ne,G,j),Q.add(Te)}),w=E.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(I,G,ne=null){let Q=this.compile(I,G,ne);return new Promise(j=>{function Te(){if(Q.forEach(function(De){let Re=ke.get(De).currentProgram;(Re===void 0||Re.isReady())&&Q.delete(De)}),Q.size===0){j(I);return}setTimeout(Te,10)}it.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ps=null;function Xc(I){Ps&&Ps(I)}function fi(){ts.stop()}function tf(){ts.start()}let ts=new sp;ts.setAnimationLoop(Xc),typeof self!="undefined"&&ts.setContext(self),this.setAnimationLoop=function(I){Ps=I,ce.setAnimationLoop(I),I===null?ts.stop():ts.start()},ce.addEventListener("sessionstart",fi),ce.addEventListener("sessionend",tf),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(I,G);let ne=ce.enabled===!0&&ce.isPresenting===!0,Q=B!==null&&(le===null||ne)&&B.begin(C,le);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(G),G=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,G,le),w=P.get(I,E.length),w.init(G),w.state.textureUnits=Ge.getTextureUnits(),E.push(w),ve.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?me.setFromArrayCamera(G):oe.setFromProjectionMatrix(ve,Dn,G.reversedDepth),Ce=this.localClippingEnabled,ge=D.init(this.clippingPlanes,Ce),T=L.get(I,m.length),T.init(),m.push(T),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let De=C.xr.getDepthSensingMesh();De!==null&&qc(De,G,-1/0,C.sortObjects)}qc(I,G,0,C.sortObjects),T.finish(),k!==null&&k.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Ie,mt),et=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,et&&A.addToRenderList(T,I),this.info.autoReset===!0&&this.info.reset(),ge===!0&&D.beginShadows();let j=w.state.shadowsArray;if(N.render(j,I,G),ge===!0&&D.endShadows(),(Q&&B.hasRenderPass())===!1){let De=T.opaque,Se=T.transmissive;if(w.setupLights(),G.isArrayCamera){let Re=G.cameras;if(Se.length>0)for(let ze=0,tt=Re.length;ze<tt;ze++){let ft=Re[ze];sf(De,Se,I,ft)}et&&A.render(I);for(let ze=0,tt=Re.length;ze<tt;ze++){let ft=Re[ze];nf(T,I,ft,ft.viewport)}}else Se.length>0&&sf(De,Se,I,G),et&&A.render(I),nf(T,I,G)}le!==null&&J===0&&(Ge.updateMultisampleRenderTarget(le),Ge.updateRenderTargetMipmap(le)),Q&&B.end(C),I.isScene===!0&&I.onAfterRender(C,I,G),te.resetDefaultState(),ee=-1,ae=null,E.pop(),E.length>0?(w=E[E.length-1],Ge.setTextureUnits(w.state.textureUnits),ge===!0&&D.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,m.pop(),m.length>0?T=m[m.length-1]:T=null,k!==null&&k.renderEnd()};function qc(I,G,ne,Q){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)ne=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){let De=G.isArrayCamera?me:oe;if(!I.frustumCulled||I.intersectsFrustum(De)){Q&&Oe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ve);let Se=fe.update(I),Re=I.material;Re.visible&&T.push(I,Se,Re,ne,Oe.z,null,G)}}else if(I.isMesh||I.isLine||I.isPoints){let De=G.isArrayCamera?me:oe;if(!I.frustumCulled||I.intersectsFrustum(De)){let Se=fe.update(I),Re=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Oe.copy(I.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(I.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){let ze=Se.groups;for(let tt=0,ft=ze.length;tt<ft;tt++){let Ne=ze[tt],dt=Re[Ne.materialIndex];dt&&dt.visible&&T.push(I,Se,dt,ne,Oe.z,Ne,G)}}else Re.visible&&T.push(I,Se,Re,ne,Oe.z,null,G)}}}let Te=I.children;for(let De=0,Se=Te.length;De<Se;De++)qc(Te[De],G,ne,Q)}function nf(I,G,ne,Q){let{opaque:j,transmissive:Te,transparent:De}=I;w.setupLightsView(ne),ge===!0&&D.setGlobalState(C.clippingPlanes,ne),Q&&Me.viewport(re.copy(Q)),j.length>0&&to(j,G,ne),Te.length>0&&to(Te,G,ne),De.length>0&&to(De,G,ne),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function sf(I,G,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new Ot(1,1,{generateMipmaps:!0,type:Ne?Bt:yn,minFilter:Ai,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Te=w.state.transmissionRenderTarget[Q.id],De=Q.viewport||re;Te.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);let Se=C.getRenderTarget(),Re=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(se),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),et&&A.render(ne);let tt=C.toneMapping;C.toneMapping=ii;let ft=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),ge===!0&&D.setGlobalState(C.clippingPlanes,Q),to(I,ne,Q),Ge.updateMultisampleRenderTarget(Te),Ge.updateRenderTargetMipmap(Te),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let dt=0,kt=G.length;dt<kt;dt++){let It=G[dt],{object:Rt,geometry:an,material:Ue,group:gn}=It;if(Ue.side===vn&&Rt.layers.test(Q.layers)){let Tt=Ue.side;Ue.side=Gt,Ue.needsUpdate=!0,rf(Rt,ne,Q,an,Ue,gn),Ue.side=Tt,Ue.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ge.updateMultisampleRenderTarget(Te),Ge.updateRenderTargetMipmap(Te))}C.setRenderTarget(Se,Re,ze),C.setClearColor(se,de),ft!==void 0&&(Q.viewport=ft),C.toneMapping=tt}function to(I,G,ne){let Q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Te=I.length;j<Te;j++){let De=I[j],{object:Se,geometry:Re,group:ze}=De,tt=De.material;tt.allowOverride===!0&&Q!==null&&(tt=Q),Se.layers.test(ne.layers)&&rf(Se,G,ne,Re,tt,ze)}}function rf(I,G,ne,Q,j,Te){k!==null&&j.isNodeMaterial&&k.setObject(I,j),I.onBeforeRender(C,G,ne,Q,j,Te),I.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(C,G,ne,Q,I,Te),j.transparent===!0&&j.side===vn&&j.forceSinglePass===!1?(j.side=Gt,j.needsUpdate=!0,C.renderBufferDirect(ne,G,Q,j,I,Te),j.side=ni,j.needsUpdate=!0,C.renderBufferDirect(ne,G,Q,j,I,Te),j.side=vn):C.renderBufferDirect(ne,G,Q,j,I,Te),I.onAfterRender(C,G,ne,Q,j,Te)}function af(I){let G=0;for(let ne of I)ne.texture!==null&&G++;return G}function wr(I,G,ne){G.isScene!==!0&&(G=nt);let Q=ke.get(I),j=w.state.lights,Te=w.state.shadowsArray,De=j.state.version,Se=p.getParameters(I,j.state,Te,G,ne,w.state.lightProbeGridArray),Re=p.getProgramCacheKey(Se),ze=Q.programs;Q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let tt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Q.envMap=U.get(I.envMap||Q.environment,tt),Q.envMapRotation=Q.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,ze===void 0&&(I.addEventListener("dispose",ct),ze=new Map,Q.programs=ze,Q.programVariants=new Map);let ft=ze.get(Re);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===De)return lf(I,Se),ft}else Se.uniforms=p.getUniforms(I),k!==null&&I.isNodeMaterial&&k.build(I,ne,Se),I.onBeforeCompile(Se,C),ft=p.acquireProgram(Se,Re),ze.set(Re,ft),Q.uniforms=Se.uniforms;let Ne=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ne.clippingPlanes=D.uniform),lf(I,Se),Q.needsLights=g0(I),Q.lightsStateVersion=De,Q.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.sunLights.value=j.state.sun,Ne.sunLightShadows.value=j.state.sunShadow,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.sunShadowMatrix.value=j.state.sunShadowMatrix,Ne.sunShadowCascade.value=j.state.sunShadowCascade,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.numLightProbeGrids=af(w.state.lightProbeGridArray),Q.currentProgram=ft,Q.uniformsList=null,ft}function d0(I,G,ne,Q,j){let Te=ke.get(I),De=Te.currentProgram.id+","+Q+","+j,Se=Te.programVariants.get(De);return Se===void 0?(Se=wr(I,G,ne),Te.programVariants.set(De,Se)):(Te.currentProgram=Se,Te.uniformsList=null,Te.outputColorSpace=Q,Te.toneMapping=j),Se}function of(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=dr.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function lf(I,G){let ne=ke.get(I);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function p0(I,G,ne,Q,j){G.isScene!==!0&&(G=nt),Ge.resetTextureUnits();let Te=G.fog,De=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Se=le===null?C.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ut.workingColorSpace,Re=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ze=U.get(Q.envMap||De,Re),tt=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ft=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ne=!!ne.morphAttributes.position,dt=!!ne.morphAttributes.normal,kt=!!ne.morphAttributes.color,It=ii;Q.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(It=C.toneMapping);let Rt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,an=Rt!==void 0?Rt.length:0,Ue=ke.get(Q),gn=w.state.lights;if(ge===!0&&(Ce===!0||I!==ae)){let Ut=I===ae&&Q.id===ee;D.setState(Q,I,Ut)}let Tt=!1,ns=!1;Q.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==gn.state.version||j.isBatchedMesh&&Ue.batching===!1||!j.isBatchedMesh&&Ue.batching===!0||j.isBatchedMesh&&Ue.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ue.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||j.isInstancedMesh&&Ue.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ue.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ue.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ue.instancingMorph===!1&&j.morphTexture!==null||Ue.envMap!==ze||Q.fog===!0&&Ue.fog!==Te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==D.numPlanes||Ue.numIntersection!==D.numIntersection)||Ue.vertexAlphas!==tt||Ue.vertexTangents!==ft||Ue.morphTargets!==Ne||Ue.morphNormals!==dt||Ue.morphColors!==kt||Ue.morphTargetsCount!==an||Ue.numLightProbeGrids!==af(w.state.lightProbeGridArray)?Tt=!0:(Ue.outputColorSpace!==Se||Ue.toneMapping!==It)&&(ns=!0):(Tt=!0,Ue.__version=Q.version);let on=Ue.currentProgram;(Tt===!0||ns===!0)&&(on=ns===!0?d0(Q,G,j,Se,It):wr(Q,G,j),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,on,Ue));let no=!1,Li=!1,is=!1,vt=on.getUniforms(),nn=Ue.uniforms;if(Me.useProgram(on.program)&&(no=!0,Li=!0,is=!0),Q.id!==ee&&(ee=Q.id,Li=!0),no||ae!==I){Me.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),vt.setValue(W,"projectionMatrix",I.projectionMatrix),vt.setValue(W,"viewMatrix",I.matrixWorldInverse);let Yt=vt.map.cameraPosition;Yt!==void 0&&Yt.setValue(W,Ke.setFromMatrixPosition(I.matrixWorld)),wt.logarithmicDepthBuffer&&vt.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&vt.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),ae!==I&&(ae=I,Li=!0,is=!0)}if(Ue.needsLights&&(gn.state.sunShadowMap.length>0&&vt.setValue(W,"sunShadowMap",gn.state.sunShadowMap,Ge),gn.state.directionalShadowMap.length>0&&vt.setValue(W,"directionalShadowMap",gn.state.directionalShadowMap,Ge),gn.state.spotShadowMap.length>0&&vt.setValue(W,"spotShadowMap",gn.state.spotShadowMap,Ge),gn.state.pointShadowMap.length>0&&vt.setValue(W,"pointShadowMap",gn.state.pointShadowMap,Ge)),j.isSkinnedMesh){vt.setOptional(W,j,"bindMatrix"),vt.setOptional(W,j,"bindMatrixInverse");let Ut=j.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(W,"boneTexture",Ut.boneTexture,Ge))}j.isBatchedMesh&&(vt.setOptional(W,j,"batchingTexture"),vt.setValue(W,"batchingTexture",j._matricesTexture,Ge),vt.setOptional(W,j,"batchingIdTexture"),vt.setValue(W,"batchingIdTexture",j._indirectTexture,Ge),vt.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&vt.setValue(W,"batchingColorTexture",j._colorsTexture,Ge));let Vn=ne.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&z.update(j,ne,on),(Li||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,vt.setValue(W,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(nn.envMapIntensity.value=G.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=dv()),Li){if(vt.setValue(W,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&m0(nn,is),Te&&Q.fog===!0&&b.refreshFogUniforms(nn,Te),b.refreshMaterialUniforms(nn,Q,ie,ye,w.state.transmissionRenderTarget[I.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let Ut=v,Yt=0;for(let di of w.state.lightProbeGridArray)di.texture!==null&&(Ut.textures[Yt]=di.texture,Ut.min[Yt]=di.boundingBox.min,Ut.max[Yt]=di.boundingBox.max,Ut.resolution[Yt]=di.resolution,Yt++);for(let di in Ut)Ut[di].length=Yt;nn.probesSH.value=Ut.textures,nn.probesMin.value=Ut.min,nn.probesMax.value=Ut.max,nn.probesResolution.value=Ut.resolution}dr.upload(W,of(Ue),nn,Ge)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(dr.upload(W,of(Ue),nn,Ge),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&vt.setValue(W,"center",j.center),vt.setValue(W,"modelViewMatrix",j.modelViewMatrix),vt.setValue(W,"normalMatrix",j.normalMatrix),vt.setValue(W,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let Ut=Q.uniformsGroups;for(let Yt=0,di=Ut.length;Yt<di;Yt++){let uf=Ut[Yt];ue.update(uf,on),ue.bind(uf,on)}}return on}function m0(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function g0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(I,G,ne){let Q=ke.get(I);Q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ke.get(I.texture).__webglTexture=G,ke.get(I.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){let ne=ke.get(I);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,ne=0){le=I,Z=G,J=ne;let Q=null,j=!1,Te=!1;if(I){let Se=ke.get(I);if(Se.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(W.FRAMEBUFFER,Se.__webglFramebuffer),re.copy(I.viewport),be.copy(I.scissor),xe=I.scissorTest,Me.viewport(re),Me.scissor(be),Me.setScissorTest(xe),ee=-1;return}else if(Se.__webglFramebuffer===void 0)Ge.setupRenderTarget(I);else if(Se.__hasExternalTextures)Ge.rebindTextures(I,ke.get(I.texture).__webglTexture,ke.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let tt=I.depthTexture;if(Se.__boundDepthTexture!==tt){if(tt!==null&&ke.has(tt)&&(I.width!==tt.image.width||I.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(I)}}let Re=I.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Te=!0);let ze=ke.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?Q=ze[G][ne]:Q=ze[G],j=!0):I.samples>0&&Ge.useMultisampledRTT(I)===!1?Q=ke.get(I).__webglMultisampledFramebuffer:Array.isArray(ze)?Q=ze[ne]:Q=ze,re.copy(I.viewport),be.copy(I.scissor),xe=I.scissorTest}else re.copy(Fe).multiplyScalar(ie).floor(),be.copy(He).multiplyScalar(ie).floor(),xe=Xe;if(ne!==0&&(Q=X),Me.bindFramebuffer(W.FRAMEBUFFER,Q)&&Me.drawBuffers(I,Q),Me.viewport(re),Me.scissor(be),Me.setScissorTest(xe),j){let Se=ke.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se.__webglTexture,ne)}else if(Te){let Se=G;for(let Re=0;Re<I.textures.length;Re++){let ze=ke.get(I.textures[Re]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Re,ze.__webglTexture,ne,Se)}}else if(I!==null&&ne!==0){let Se=ke.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Se.__webglTexture,ne)}ee=-1};function cf(I){let G=ke.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=wt.textureFormatReadable(I.format),G.__typeReadable=wt.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,ne,Q,j,Te,De,Se=0){if(!(I&&I.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Re=Re[De],Array.isArray(Re)&&(Re=Re[0])),Re){Me.bindFramebuffer(W.FRAMEBUFFER,Re);try{let ze=I.textures[Se],tt=ze.format,ft=ze.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Se);let Ne=cf(ze);if(Ne.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-Q&&ne>=0&&ne<=I.height-j&&W.readPixels(G,ne,Q,j,$.convert(tt),$.convert(ft),Te)}finally{let ze=le!==null?ke.get(le).__webglFramebuffer:null;Me.bindFramebuffer(W.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(I,G,ne,Q,j,Te,De,Se=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Re=Re[De],Array.isArray(Re)&&(Re=Re[0])),Re)if(G>=0&&G<=I.width-Q&&ne>=0&&ne<=I.height-j){Me.bindFramebuffer(W.FRAMEBUFFER,Re);let ze=I.textures[Se],tt=ze.format,ft=ze.type;I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Se);let Ne=cf(ze);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.bufferData(W.PIXEL_PACK_BUFFER,Te.byteLength,W.STREAM_READ),W.readPixels(G,ne,Q,j,$.convert(tt),$.convert(ft),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let kt=le!==null?ke.get(le).__webglFramebuffer:null;Me.bindFramebuffer(W.FRAMEBUFFER,kt);let It=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await wd(W,It,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Te),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(dt),W.deleteSync(It),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,ne=0){let Q=Math.pow(2,-ne),j=Math.floor(I.image.width*Q),Te=Math.floor(I.image.height*Q),De=G!==null?G.x:0,Se=G!==null?G.y:0;Ge.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,ne,0,0,De,Se,j,Te),Me.unbindTexture()},this.copyTextureToTexture=function(I,G,ne=null,Q=null,j=0,Te=0){let De,Se,Re,ze,tt,ft,Ne,dt,kt,It=I.isCompressedTexture?I.mipmaps[Te]:I.image;if(ne!==null)De=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,Re=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,tt=ne.min.y,ft=ne.isBox3?ne.min.z:0;else{let vt=Math.pow(2,-j);De=Math.floor(It.width*vt),Se=Math.floor(It.height*vt),I.isDataArrayTexture?Re=It.depth:I.isData3DTexture?Re=Math.floor(It.depth*vt):Re=1,ze=0,tt=0,ft=0}Q!==null?(Ne=Q.x,dt=Q.y,kt=Q.z):(Ne=0,dt=0,kt=0);let Rt=$.convert(G.format),an=$.convert(G.type),Ue;G.isData3DTexture?(Ge.setTexture3D(G,0),Ue=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ge.setTexture2DArray(G,0),Ue=W.TEXTURE_2D_ARRAY):(Ge.setTexture2D(G,0),Ue=W.TEXTURE_2D),Me.activeTexture(W.TEXTURE0),Me.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),Me.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Me.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);let gn=Me.getParameter(W.UNPACK_ROW_LENGTH),Tt=Me.getParameter(W.UNPACK_IMAGE_HEIGHT),ns=Me.getParameter(W.UNPACK_SKIP_PIXELS),on=Me.getParameter(W.UNPACK_SKIP_ROWS),no=Me.getParameter(W.UNPACK_SKIP_IMAGES);Me.pixelStorei(W.UNPACK_ROW_LENGTH,It.width),Me.pixelStorei(W.UNPACK_IMAGE_HEIGHT,It.height),Me.pixelStorei(W.UNPACK_SKIP_PIXELS,ze),Me.pixelStorei(W.UNPACK_SKIP_ROWS,tt),Me.pixelStorei(W.UNPACK_SKIP_IMAGES,ft);let Li=I.isDataArrayTexture||I.isData3DTexture,is=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){let vt=ke.get(I),nn=ke.get(G),Vn=ke.get(vt.__renderTarget),Ut=ke.get(nn.__renderTarget);Me.bindFramebuffer(W.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Me.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Yt=0;Yt<Re;Yt++)Li&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ke.get(I).__webglTexture,j,ft+Yt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ke.get(G).__webglTexture,Te,kt+Yt)),W.blitFramebuffer(ze,tt,ze+De,tt+Se,Ne,dt,Ne+De,dt+Se,W.DEPTH_BUFFER_BIT,W.NEAREST);Me.bindFramebuffer(W.READ_FRAMEBUFFER,null),Me.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||I.isRenderTargetTexture||ke.has(I)){let vt=ke.get(I),nn=ke.get(G);Me.bindFramebuffer(W.READ_FRAMEBUFFER,O),Me.bindFramebuffer(W.DRAW_FRAMEBUFFER,q);for(let Vn=0;Vn<Re;Vn++)Li?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,vt.__webglTexture,j,ft+Vn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,vt.__webglTexture,j),is?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nn.__webglTexture,Te,kt+Vn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,nn.__webglTexture,Te),j!==0?W.blitFramebuffer(ze,tt,ze+De,tt+Se,Ne,dt,Ne+De,dt+Se,W.COLOR_BUFFER_BIT,W.NEAREST):is?W.copyTexSubImage3D(Ue,Te,Ne,dt,kt+Vn,ze,tt,De,Se):W.copyTexSubImage2D(Ue,Te,Ne,dt,ze,tt,De,Se);Me.bindFramebuffer(W.READ_FRAMEBUFFER,null),Me.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else is?I.isDataTexture||I.isData3DTexture?W.texSubImage3D(Ue,Te,Ne,dt,kt,De,Se,Re,Rt,an,It.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ue,Te,Ne,dt,kt,De,Se,Re,Rt,It.data):W.texSubImage3D(Ue,Te,Ne,dt,kt,De,Se,Re,Rt,an,It):I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Te,Ne,dt,De,Se,Rt,an,It.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Te,Ne,dt,It.width,It.height,Rt,It.data):W.texSubImage2D(W.TEXTURE_2D,Te,Ne,dt,De,Se,Rt,an,It);Me.pixelStorei(W.UNPACK_ROW_LENGTH,gn),Me.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt),Me.pixelStorei(W.UNPACK_SKIP_PIXELS,ns),Me.pixelStorei(W.UNPACK_SKIP_ROWS,on),Me.pixelStorei(W.UNPACK_SKIP_IMAGES,no),Te===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&W.generateMipmap(Ue),Me.unbindTexture()},this.initRenderTarget=function(I){ke.get(I).__webglFramebuffer===void 0&&Ge.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ge.setTextureCube(I,0):I.isData3DTexture?Ge.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ge.setTexture2DArray(I,0):Ge.setTexture2D(I,0),Me.unbindTexture()},this.resetState=function(){Z=0,J=0,le=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var mc=class extends st{constructor(e,t,n=!1,s=!1,r=1e4){let a=new Pt;super(a,t),this.isMarchingCubes=!0;let o=this,l=new Float32Array(36),c=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let M=r*3;this.positionArray=new Float32Array(M*3);let v=new Mt(this.positionArray,3);v.setUsage(hr),a.setAttribute("position",v),this.normalArray=new Float32Array(M*3);let T=new Mt(this.normalArray,3);if(T.setUsage(hr),a.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(M*2);let w=new Mt(this.uvArray,2);w.setUsage(hr),a.setAttribute("uv",w)}if(this.enableColors){this.colorArray=new Float32Array(M*3);let w=new Mt(this.colorArray,3);w.setUsage(hr),a.setAttribute("color",w)}a.boundingSphere=new Un(new H,1)};function h(y,M,v){return y+(M-y)*v}function f(y,M,v,T,w,m,E,B,C,F){let k=(v-E)/(B-E),X=o.normal_cache;l[M+0]=T+k*o.delta,l[M+1]=w,l[M+2]=m,c[M+0]=h(X[y+0],X[y+3],k),c[M+1]=h(X[y+1],X[y+4],k),c[M+2]=h(X[y+2],X[y+5],k),u[M+0]=h(o.palette[C*3+0],o.palette[F*3+0],k),u[M+1]=h(o.palette[C*3+1],o.palette[F*3+1],k),u[M+2]=h(o.palette[C*3+2],o.palette[F*3+2],k)}function d(y,M,v,T,w,m,E,B,C,F){let k=(v-E)/(B-E),X=o.normal_cache;l[M+0]=T,l[M+1]=w+k*o.delta,l[M+2]=m;let O=y+o.yd*3;c[M+0]=h(X[y+0],X[O+0],k),c[M+1]=h(X[y+1],X[O+1],k),c[M+2]=h(X[y+2],X[O+2],k),u[M+0]=h(o.palette[C*3+0],o.palette[F*3+0],k),u[M+1]=h(o.palette[C*3+1],o.palette[F*3+1],k),u[M+2]=h(o.palette[C*3+2],o.palette[F*3+2],k)}function x(y,M,v,T,w,m,E,B,C,F){let k=(v-E)/(B-E),X=o.normal_cache;l[M+0]=T,l[M+1]=w,l[M+2]=m+k*o.delta;let O=y+o.zd*3;c[M+0]=h(X[y+0],X[O+0],k),c[M+1]=h(X[y+1],X[O+1],k),c[M+2]=h(X[y+2],X[O+2],k),u[M+0]=h(o.palette[C*3+0],o.palette[F*3+0],k),u[M+1]=h(o.palette[C*3+1],o.palette[F*3+1],k),u[M+2]=h(o.palette[C*3+2],o.palette[F*3+2],k)}function S(y){let M=y*3;o.normal_cache[M]===0&&(o.normal_cache[M+0]=o.field[y-1]-o.field[y+1],o.normal_cache[M+1]=o.field[y-o.yd]-o.field[y+o.yd],o.normal_cache[M+2]=o.field[y-o.zd]-o.field[y+o.zd])}function _(y,M,v,T,w){let m=T+1,E=T+o.yd,B=T+o.zd,C=m+o.yd,F=m+o.zd,k=T+o.yd+o.zd,X=m+o.yd+o.zd,O=0,q=o.field[T],Z=o.field[m],J=o.field[E],le=o.field[C],ee=o.field[B],ae=o.field[F],re=o.field[k],be=o.field[X];q<w&&(O|=1),Z<w&&(O|=2),J<w&&(O|=8),le<w&&(O|=4),ee<w&&(O|=16),ae<w&&(O|=32),re<w&&(O|=128),be<w&&(O|=64);let xe=mv[O];if(xe===0)return 0;let se=o.delta,de=y+se,Ee=M+se,ye=v+se;xe&1&&(S(T),S(m),f(T*3,0,w,y,M,v,q,Z,T,m)),xe&2&&(S(m),S(C),d(m*3,3,w,de,M,v,Z,le,m,C)),xe&4&&(S(E),S(C),f(E*3,6,w,y,Ee,v,J,le,E,C)),xe&8&&(S(T),S(E),d(T*3,9,w,y,M,v,q,J,T,E)),xe&16&&(S(B),S(F),f(B*3,12,w,y,M,ye,ee,ae,B,F)),xe&32&&(S(F),S(X),d(F*3,15,w,de,M,ye,ae,be,F,X)),xe&64&&(S(k),S(X),f(k*3,18,w,y,Ee,ye,re,be,k,X)),xe&128&&(S(B),S(k),d(B*3,21,w,y,M,ye,ee,re,B,k)),xe&256&&(S(T),S(B),x(T*3,24,w,y,M,v,q,ee,T,B)),xe&512&&(S(m),S(F),x(m*3,27,w,de,M,v,Z,ae,m,F)),xe&1024&&(S(C),S(X),x(C*3,30,w,de,Ee,v,le,be,C,X)),xe&2048&&(S(E),S(k),x(E*3,33,w,y,Ee,v,J,re,E,k)),O<<=4;let ie,Ie,mt,Fe=0,He=0;for(;pc[O+He]!=-1;)ie=O+He,Ie=ie+1,mt=ie+2,g(l,c,u,3*pc[ie],3*pc[Ie],3*pc[mt]),He+=3,Fe++;return Fe}function g(y,M,v,T,w,m){let E=o.count*3;if(o.positionArray[E+0]=y[T],o.positionArray[E+1]=y[T+1],o.positionArray[E+2]=y[T+2],o.positionArray[E+3]=y[w],o.positionArray[E+4]=y[w+1],o.positionArray[E+5]=y[w+2],o.positionArray[E+6]=y[m],o.positionArray[E+7]=y[m+1],o.positionArray[E+8]=y[m+2],o.material.flatShading===!0){let B=(M[T+0]+M[w+0]+M[m+0])/3,C=(M[T+1]+M[w+1]+M[m+1])/3,F=(M[T+2]+M[w+2]+M[m+2])/3;o.normalArray[E+0]=B,o.normalArray[E+1]=C,o.normalArray[E+2]=F,o.normalArray[E+3]=B,o.normalArray[E+4]=C,o.normalArray[E+5]=F,o.normalArray[E+6]=B,o.normalArray[E+7]=C,o.normalArray[E+8]=F}else o.normalArray[E+0]=M[T+0],o.normalArray[E+1]=M[T+1],o.normalArray[E+2]=M[T+2],o.normalArray[E+3]=M[w+0],o.normalArray[E+4]=M[w+1],o.normalArray[E+5]=M[w+2],o.normalArray[E+6]=M[m+0],o.normalArray[E+7]=M[m+1],o.normalArray[E+8]=M[m+2];if(o.enableUvs){let B=o.count*2;o.uvArray[B+0]=y[T+0],o.uvArray[B+1]=y[T+2],o.uvArray[B+2]=y[w+0],o.uvArray[B+3]=y[w+2],o.uvArray[B+4]=y[m+0],o.uvArray[B+5]=y[m+2]}o.enableColors&&(o.colorArray[E+0]=v[T+0],o.colorArray[E+1]=v[T+1],o.colorArray[E+2]=v[T+2],o.colorArray[E+3]=v[w+0],o.colorArray[E+4]=v[w+1],o.colorArray[E+5]=v[w+2],o.colorArray[E+6]=v[m+0],o.colorArray[E+7]=v[m+1],o.colorArray[E+8]=v[m+2]),o.count+=3}this.addBall=function(y,M,v,T,w,m){let E=Math.sign(T);T=Math.abs(T);let B=m!=null,C=new Le(y,M,v);if(B)try{C=m instanceof Le?m:Array.isArray(m)?new Le(Math.min(Math.abs(m[0]),1),Math.min(Math.abs(m[1]),1),Math.min(Math.abs(m[2]),1)):new Le(m)}catch{C=new Le(y,M,v)}let F=this.size*Math.sqrt(T/w),k=v*this.size,X=M*this.size,O=y*this.size,q=Math.floor(k-F);q<1&&(q=1);let Z=Math.floor(k+F);Z>this.size-1&&(Z=this.size-1);let J=Math.floor(X-F);J<1&&(J=1);let le=Math.floor(X+F);le>this.size-1&&(le=this.size-1);let ee=Math.floor(O-F);ee<1&&(ee=1);let ae=Math.floor(O+F);ae>this.size-1&&(ae=this.size-1);let re,be,xe,se,de,Ee,ye,ie,Ie,mt,Fe;for(xe=q;xe<Z;xe++)for(de=this.size2*xe,ie=xe/this.size-v,Ie=ie*ie,be=J;be<le;be++)for(se=de+this.size*be,ye=be/this.size-M,mt=ye*ye,re=ee;re<ae;re++)if(Ee=re/this.size-y,Fe=T/(1e-6+Ee*Ee+mt+Ie)-w,Fe>0){this.field[se+re]+=Fe*E;let He=Math.sqrt((re-O)*(re-O)+(be-X)*(be-X)+(xe-k)*(xe-k))/F,Xe=1-He*He*He*(He*(He*6-15)+10);this.palette[(se+re)*3+0]+=C.r*Xe,this.palette[(se+re)*3+1]+=C.g*Xe,this.palette[(se+re)*3+2]+=C.b*Xe}},this.addPlaneX=function(y,M){let v=this.size,T=this.yd,w=this.zd,m=this.field,E,B,C,F,k,X,O,q=v*Math.sqrt(y/M);for(q>v&&(q=v),E=0;E<q;E++)if(X=E/v,F=X*X,k=y/(1e-4+F)-M,k>0)for(B=0;B<v;B++)for(O=E+B*T,C=0;C<v;C++)m[w*C+O]+=k},this.addPlaneY=function(y,M){let v=this.size,T=this.yd,w=this.zd,m=this.field,E,B,C,F,k,X,O,q,Z=v*Math.sqrt(y/M);for(Z>v&&(Z=v),B=0;B<Z;B++)if(X=B/v,F=X*X,k=y/(1e-4+F)-M,k>0)for(O=B*T,E=0;E<v;E++)for(q=O+E,C=0;C<v;C++)m[w*C+q]+=k},this.addPlaneZ=function(y,M){let v=this.size,T=this.yd,w=this.zd,m=this.field,E,B,C,F,k,X,O,q,Z=v*Math.sqrt(y/M);for(Z>v&&(Z=v),C=0;C<Z;C++)if(X=C/v,F=X*X,k=y/(1e-4+F)-M,k>0)for(O=w*C,B=0;B<v;B++)for(q=O+B*T,E=0;E<v;E++)m[q+E]+=k},this.setCell=function(y,M,v,T){let w=this.size2*v+this.size*M+y;this.field[w]=T},this.getCell=function(y,M,v){let T=this.size2*v+this.size*M+y;return this.field[T]},this.blur=function(y=1){let M=this.field,v=M.slice(),T=this.size,w=this.size2;for(let m=0;m<T;m++)for(let E=0;E<T;E++)for(let B=0;B<T;B++){let C=w*B+T*E+m,F=v[C],k=1;for(let X=-1;X<=1;X+=2){let O=X+m;if(!(O<0||O>=T))for(let q=-1;q<=1;q+=2){let Z=q+E;if(!(Z<0||Z>=T))for(let J=-1;J<=1;J+=2){let le=J+B;if(le<0||le>=T)continue;let ee=w*le+T*Z+O,ae=v[ee];k++,F+=y*(ae-F)/k}}}M[C]=F}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;let y=this.size-2;for(let M=1;M<y;M++){let v=this.size2*M,T=(M-this.halfsize)/this.halfsize;for(let w=1;w<y;w++){let m=v+this.size*w,E=(w-this.halfsize)/this.halfsize;for(let B=1;B<y;B++){let C=(B-this.halfsize)/this.halfsize,F=m+B;_(C,E,T,F,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}},mv=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),pc=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var za=class i extends st{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Zt,h=new H,f=new H,d=new H,x=new ht,S=new H(0,0,-1),_=new Ct,g=new H,y=new H,M=new Ct,v=new ht,T=new Ot(r,a,{samples:c,type:Bt}),w=new At({name:l.name!==void 0?l.name:"unspecified",uniforms:Yn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=T.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=v,this.material=w,this.onBeforeRender=function(m,E,B){let C=this.getReflectionCamera(B);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(B.matrixWorld),x.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(x),g.subVectors(f,d),g.dot(h)>0===!0&&this.forceUpdate===!1)return;g.reflect(h).negate(),g.add(f),x.extractRotation(B.matrixWorld),S.set(0,0,-1),S.applyMatrix4(x),S.add(d),y.subVectors(f,S),y.reflect(h).negate(),y.add(f),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(x),C.up.reflect(h),C.lookAt(y),C.far=B.far,C.updateMatrixWorld(),C.projectionMatrix.copy(B.projectionMatrix),C.projectionMatrix.elements[8]*=-1,C.projectionMatrix.elements[12]*=-1,v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(C.matrixWorldInverse),_.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let k=C.projectionMatrix;C.isOrthographicCamera?(M.x=(Math.sign(_.x)+k.elements[8])/k.elements[0],M.y=(Math.sign(_.y)+k.elements[9])/k.elements[5],M.z=-B.far,M.w=1):(M.x=(Math.sign(_.x)+k.elements[8])/k.elements[0],M.y=(Math.sign(_.y)+k.elements[9])/k.elements[5],M.z=-1,M.w=(1+k.elements[10])/k.elements[14]),_.multiplyScalar(2/_.dot(M)),k.elements[2]=_.x,k.elements[6]=_.y,C.isOrthographicCamera?(k.elements[10]=_.z-o,k.elements[14]=_.w-1):(k.elements[10]=_.z+1-o,k.elements[14]=_.w),n.visible=!1;let X=m.getRenderTarget(),O=m.xr.enabled,q=m.shadowMap.autoUpdate;m.xr.enabled=!1,m.shadowMap.autoUpdate=!1,m.setRenderTarget(T),m.state.buffers.depth.setMask(!0),m.autoClear===!1&&m.clear(),m.render(E,C),m.xr.enabled=O,m.shadowMap.autoUpdate=q,m.setRenderTarget(X);let Z=B.viewport;Z!==void 0&&m.state.viewport(Z),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()},this.getReflectionCamera=function(m){let E=this._reflectionCameras.get(m);return E===void 0&&(E=m.clone(),this._reflectionCameras.set(m,E)),E}}};za.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gv=new ms(-1,1,1,-1,0,1),mh=class extends Pt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},xv=new mh,Xi=class{constructor(e){this._mesh=new st(xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var xr=class extends Pn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yn.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Va=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gc=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(gr),this.copyPass.material.blending=Ei,this.timer=new va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Va!==void 0&&(a instanceof Va?n=!0:a instanceof gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _c=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _r=class i extends Pn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:Bt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Ot(r,a,{type:Bt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Ot(r,a,{type:Bt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=mp;this.highPassUniforms=Yn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yn.clone(gr.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,premultipliedAlpha:!0,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new At({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};_r.BlurDirectionX=new he(1,0);_r.BlurDirectionY=new he(0,1);var ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var vc=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yn.clone(ka.uniforms),this.material=new rr({name:ka.name,uniforms:this.uniforms,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var gh=[["e2","e4",null,null,null,null],["d7","d6",null,null,null,null],["d2","d4",null,null,null,null],["g8","f6",null,null,null,null],["b1","c3",null,null,null,null],["g7","g6",null,null,null,null],["g1","f3",null,null,null,null],["f8","g7",null,null,null,null],["f1","e2",null,null,null,null],["e8","g8",null,"h8","f8",null],["e1","g1",null,"h1","f1",null],["c8","g4",null,null,null,null],["c1","e3",null,null,null,null],["b8","c6",null,null,null,null],["d1","d3",null,null,null,null],["e7","e5",null,null,null,null],["d4","d5",null,null,null,null],["c6","b4",null,null,null,null],["d3","d2",null,null,null,null],["a7","a5",null,null,null,null],["h2","h3",null,null,null,null],["g4","d7",null,null,null,null],["e3","g5",null,null,null,null],["d8","e8",null,null,null,null],["f3","h2",null,null,null,null],["g8","h8",null,null,null,null],["a2","a3",null,null,null,null],["b4","a6",null,null,null,null],["g5","h6",null,null,null,null],["g7","h6","h6",null,null,null],["d2","h6","h6",null,null,null],["f6","g8",null,null,null,null],["h6","e3",null,null,null,null],["f7","f5",null,null,null,null],["e4","f5","f5",null,null,null],["d7","f5","f5",null,null,null],["a1","c1",null,null,null,null],["g8","f6",null,null,null,null],["g2","g4",null,null,null,null],["f5","d7",null,null,null,null],["f2","f4",null,null,null,null],["e5","f4","f4",null,null,null],["e3","f4","f4",null,null,null],["a6","c5",null,null,null,null],["c1","e1",null,null,null,null],["f6","e4",null,null,null,null],["f4","e3",null,null,null,null],["e8","e5",null,null,null,null],["c3","e4","e4",null,null,null],["c5","e4","e4",null,null,null],["e2","f3",null,null,null,null],["e4","g5",null,null,null,null],["e3","e5","e5",null,null,null],["d6","e5","e5",null,null,null],["f3","g2",null,null,null,null],["f8","f1","f1",null,null,null],["h2","f1","f1",null,null,null],["a8","e8",null,null,null,null],["f1","d2",null,null,null,null],["a5","a4",null,null,null,null],["e1","e3",null,null,null,null],["h8","g7",null,null,null,null],["g1","f2",null,null,null,null],["e8","e7",null,null,null,null],["c2","c4",null,null,null,null],["b7","b6",null,null,null,null],["e3","c3",null,null,null,null],["h7","h5",null,null,null,null],["f2","g3",null,null,null,null],["h5","g4","g4",null,null,null],["h3","g4","g4",null,null,null],["d7","e8",null,null,null,null],["c4","c5",null,null,null,null],["b6","c5","c5",null,null,null],["d2","e4",null,null,null,null],["g5","e4","e4",null,null,null],["g2","e4","e4",null,null,null],["g7","f6",null,null,null,null],["c3","c5","c5",null,null,null],["f6","g5",null,null,null,null],["e4","d3",null,null,null,null],["e7","f7",null,null,null,null],["d3","e2",null,null,null,null],["f7","h7",null,null,null,null],["e2","f3",null,null,null,null],["h7","f7",null,null,null,null],["c5","c4",null,null,null,null],["f7","h7",null,null,null,null],["c4","b4",null,null,null,null],["h7","e7",null,null,null,null],["g3","f2",null,null,null,null],["e8","d7",null,null,null,null],["f2","g3",null,null,null,null],["d7","e8",null,null,null,null],["g3","f2",null,null,null,null],["e8","d7",null,null,null,null],["f2","e3",null,null,null,null],["e5","e4",null,null,null,null],["f3","e4","e4",null,null,null],["g5","g4","g4",null,null,null],["e3","f2",null,null,null,null],["g4","g5",null,null,null,null],["e4","c2",null,null,null,null],["e7","e5",null,null,null,null],["c2","a4","a4",null,null,null],["d7","a4","a4",null,null,null],["b4","a4","a4",null,null,null],["e5","d5","d5",null,null,null],["f2","e3",null,null,null,null],["d5","b5",null,null,null,null],["b2","b4",null,null,null,null],["b5","e5",null,null,null,null],["e3","d4",null,null,null,null],["g5","f4",null,null,null,null],["a4","a8",null,null,null,null],["g6","g5",null,null,null,null],["a8","c8",null,null,null,null],["e5","e4",null,null,null,null],["d4","d5",null,null,null,null],["e4","e5",null,null,null,null],["d5","c6",null,null,null,null],["g5","g4",null,null,null,null],["c8","c7","c7",null,null,null],["g4","g3",null,null,null,null],["c6","b6",null,null,null,null],["g3","g2",null,null,null,null],["c7","c1",null,null,null,null]];var ui=(i,e=document)=>e.querySelector(i),sn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),pt=(i,e,t)=>i+(e-i)*t,Jn=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,$n=i=>1-Math.pow(1-i,3),Ar=i=>i*i*i,vv=i=>i===1?1:1-Math.pow(2,-10*i),Bh=i=>-(Math.cos(Math.PI*i)-1)/2,yv=i=>1+2.2*Math.pow(i-1,3)+1.2*Math.pow(i-1,2),li=Math.PI/180,zn=matchMedia("(pointer: coarse)").matches,Lc=matchMedia("(prefers-reduced-motion: reduce)").matches,gp=1234567,Op=()=>(gp=gp*16807%2147483647)/2147483647,bc=(i,e)=>i+(e-i)*Math.random(),je=0,Tc=[];function We(i,e,t={}){let n={s:je+(t.delay||0),d:Math.max(1e-4,i),fn:e,ease:t.ease||Jn,done:t.done};return Tc.push(n),n}var Ve=(i,e)=>We(1e-4,()=>{},{delay:i,done:e});function Mv(){for(let i=0;i<Tc.length;i++){let e=Tc[i],t=(je-e.s)/e.d;if(t<0)continue;let n=Math.min(1,t);e.fn(e.ease(n),n),t>=1&&(Tc.splice(i--,1),e.done&&e.done())}}function zh(i,e,{repeat:t=1,srgb:n=!0}={}){let s=document.createElement("canvas");s.width=s.height=i,e(s.getContext("2d"),i);let r=new Qr(s);return n&&(r.colorSpace=un),t!==1&&(r.wrapS=r.wrapT=us,r.repeat.set(t,t)),r.anisotropy=8,r}var Pi=new Uint8Array(512);for(let i=0;i<256;i++)Pi[i]=i;for(let i=255;i>0;i--){let e=Math.floor(Op()*(i+1));[Pi[i],Pi[e]]=[Pi[e],Pi[i]]}for(let i=0;i<256;i++)Pi[256+i]=Pi[i];var xp=i=>i*i*(3-2*i);function Sv(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=(n%t+t)%t,l=(s%t+t)%t,c=(o+1)%t,u=(l+1)%t,h=(x,S)=>Pi[Pi[x]+S]/255,f=xp(r),d=xp(a);return pt(pt(h(o,l),h(c,l),f),pt(h(o,u),h(c,u),f),d)}function _p(i,e,t,n){let s=0,r=.5,a=1;for(let o=0;o<t;o++)s+=r*Sv(i*a,e*a,n*a),r*=.5,a*=2;return s}function bv(i,e,t){let n=i.createImageData(e,e),s=n.data;for(let r=0;r<e;r++)for(let a=0;a<e;a++){let[o,l,c,u]=t(a/e,r/e),h=(r*e+a)*4;s[h]=o,s[h+1]=l,s[h+2]=c,s[h+3]=u===void 0?255:u}i.putImageData(n,0,0)}var Vh=i=>i.map(([e,t])=>new he(e,t));function Xa(i,e,t,n,s,r=12){let a=[];for(let o=0;o<=r;o++){let l=n+(s-n)*o/r;a.push([Math.max(0,i+t*Math.cos(l)),e+t*Math.sin(l)])}return a}var vr=[[0,0],[.37,0],[.382,.01],[.386,.03],[.382,.048],[.36,.06],[.346,.068],[.35,.078],[.357,.088],[.35,.1],[.33,.112],[.3,.126],[.276,.142]],Bp={P:[...vr,[.24,.165],[.2,.21],[.165,.28],[.142,.36],[.13,.405],[.185,.412],[.205,.424],[.208,.438],[.198,.452],[.13,.463],[.1,.485],...Xa(0,.612,.142,-52*li,90*li,18)],R:[...vr,[.268,.165],[.244,.205],[.226,.28],[.214,.42],[.214,.52],[.22,.56],[.25,.598],[.272,.628],[.282,.645],[.282,.8],[.27,.812],[.205,.812],[.198,.75],[0,.75]],N:[...vr,[.272,.162],[.262,.18],[.262,.205],[.2,.215],[0,.215]],B:[...vr,[.242,.165],[.2,.21],[.158,.3],[.128,.42],[.114,.52],[.112,.556],[.18,.564],[.2,.578],[.203,.592],[.19,.606],[.112,.616],[.092,.636],[.122,.668],[.15,.712],[.164,.77],[.16,.822],[.142,.872],[.112,.922],[.072,.966],[.034,.996],...Xa(0,1.036,.05,-48*li,90*li,12)],Q:[...vr,[.258,.165],[.212,.21],[.168,.33],[.138,.5],[.123,.66],[.12,.718],[.192,.726],[.212,.742],[.212,.758],[.198,.77],[.128,.78],[.132,.8],[.162,.86],[.202,.94],[.236,.998],[.244,1.018],[.228,1.03],[.172,1.035],[.122,1.06],[.072,1.09],[.04,1.106],...Xa(0,1.152,.054,-55*li,90*li,12)],K:[...vr,[.268,.165],[.222,.21],[.174,.34],[.142,.52],[.128,.72],[.126,.766],[.202,.774],[.222,.79],[.222,.806],[.208,.818],[.132,.83],[.142,.86],[.178,.92],[.208,.99],[.22,1.04],[.214,1.07],[.162,1.1],[.1,1.13],[.06,1.16],[.05,1.19],[0,1.19]]},vp={},kc=i=>vp[i]||(vp[i]=new ps(Vh(Bp[i]),zn?48:64)),Ss=.0122,Ec=49.4,Ph=80.4,Tv="M66.40 80.40 C66.73 78.67 67.83 73.73 68.40 70.00 C68.97 66.27 69.73 62.00 69.80 58.00 C69.87 54.00 69.50 49.67 68.80 46.00 C68.10 42.33 66.97 39.07 65.60 36.00 C64.23 32.93 62.27 29.97 60.60 27.60 C58.93 25.23 56.63 23.57 55.60 21.80 C54.57 20.03 55.03 18.77 54.40 17.00 C53.77 15.23 52.23 12.17 51.80 11.20 C51.27 11.93 49.77 14.33 48.60 15.60 C47.43 16.87 46.57 17.67 44.80 18.80 C43.03 19.93 40.27 20.77 38.00 22.40 C35.73 24.03 33.17 26.50 31.20 28.60 C29.23 30.70 27.53 33.03 26.20 35.00 C24.87 36.97 23.87 38.83 23.20 40.40 C22.53 41.97 22.13 43.20 22.20 44.40 C22.27 45.60 22.70 46.73 23.60 47.60 C24.50 48.47 26.03 49.33 27.60 49.60 C29.17 49.87 31.17 49.53 33.00 49.20 C34.83 48.87 37.67 47.87 38.60 47.60 C39.07 47.97 41.20 48.53 41.40 49.80 C41.60 51.07 40.63 53.00 39.80 55.20 C38.97 57.40 37.47 60.20 36.40 63.00 C35.33 65.80 34.07 69.10 33.40 72.00 C32.73 74.90 32.57 79.00 32.40 80.40 Z",Ev=["M63.60 60.00 C63.47 57.93 63.43 51.27 62.80 47.60 C62.17 43.93 61.03 40.87 59.80 38.00 C58.57 35.13 56.97 32.63 55.40 30.40 C53.83 28.17 51.23 25.57 50.40 24.60","M66.20 52.00 C66.03 50.50 65.80 45.73 65.20 43.00 C64.60 40.27 63.70 37.90 62.60 35.60 C61.50 33.30 59.27 30.27 58.60 29.20","M22.9 46.4 Q26 47.2 29.4 46.6","M44.8 18.8 Q46.6 22.6 45.4 26.4"];function yp(i){let e=i.match(/[MCLQZ]|-?\d*\.?\d+/g),t=[],n=0,s="",r=0,a=0,o=()=>parseFloat(e[n++]);for(;n<e.length;)if(/[MCLQZ]/.test(e[n])&&(s=e[n++]),s==="M")r=o(),a=o(),t.push([r,a]),s="L";else if(s==="L")r=o(),a=o(),t.push([r,a]);else if(s==="C"){let l=o(),c=o(),u=o(),h=o(),f=o(),d=o();for(let x=1;x<=8;x++){let S=x/8,_=1-S;t.push([_*_*_*r+3*_*_*S*l+3*_*S*S*u+S*S*S*f,_*_*_*a+3*_*_*S*c+3*_*S*S*h+S*S*S*d])}r=f,a=d}else if(s==="Q"){let l=o(),c=o(),u=o(),h=o();for(let f=1;f<=8;f++){let d=f/8,x=1-d;t.push([x*x*r+2*x*d*l+d*d*u,x*x*a+2*x*d*c+d*d*h])}r=u,a=h}return t.map(([l,c])=>[(l-Ec)*Ss,(Ph-c)*Ss])}function Mp(i,e,t,n,s,r){let a=s-t,o=r-n,l=sn(((i-t)*a+(e-n)*o)/(a*a+o*o||1)),c=t+l*a-i,u=n+l*o-e;return Math.sqrt(c*c+u*u)}function Sp(i){let n=yp(Tv),s=Ev.map(M=>yp(M)),r=i,a=new Float32Array(r*r),o=new Float32Array(r*r);for(let M=0;M<r;M++)for(let v=0;v<r;v++){let T=(v/(r-1)*2-1)*.5,w=(M/(r-1)*2-1)*.5+.43,m=1e9,E=!1;for(let C=0,F=n.length-1;C<n.length;F=C++){let[k,X]=n[F],[O,q]=n[C];m=Math.min(m,Mp(T,w,k,X,O,q)),X>w!=q>w&&T<(O-k)*(w-X)/(q-X)+k&&(E=!E)}a[M*r+v]=E?-m:m;let B=1e9;for(let C of s)for(let F=1;F<C.length;F++)B=Math.min(B,Mp(T,w,C[F-1][0],C[F-1][1],C[F][0],C[F][1]));o[M*r+v]=B}let l=[(40.6-Ec)*Ss,(Ph-28.9)*Ss],c=[(25.8-Ec)*Ss,(Ph-41.8)*Ss],u=new mc(i,new An,!1,!1,12e4);u.isolation=0;let h=u.size,f=u.field,d=(M,v)=>{let T=M/Ss+Ec;return .128-.04*sn((44-T)/18)-.035*sn((v-.66)/.16)+.09*sn((.07-v)/.07)};for(let M=0;M<h;M++)for(let v=0;v<h;v++)for(let T=0;T<h;T++){let w=(T/(h-1)*2-1)*.5,m=(v/(h-1)*2-1)*.5+.43,E=(M/(h-1)*2-1)*.5,B=v*r+T,C=a[B],F=d(w,m)*Math.sqrt(sn(-C/.075));C<-.004&&(F-=.011*Math.exp(-Math.pow(o[B]/.0075,2)));let k=Math.max(C,Math.abs(E)-F);m<.004&&(k=Math.max(k,.004-m));let X=w-l[0],O=m-l[1],q=Math.abs(E)-d(l[0],l[1])*.92;k=Math.max(k,.026-Math.sqrt(X*X+O*O+q*q));let Z=w-c[0],J=m-c[1],le=Math.abs(E)-.06;k=Math.max(k,.016-Math.sqrt(Z*Z+J*J+le*le)),f[T+v*h+M*h*h]=-k*100}u.update();let x=u.count,S=u.geometry.attributes.position.array.slice(0,x*3),_=u.geometry.attributes.normal.array.slice(0,x*3);for(let M=0;M<x;M++)S[M*3]*=.5,S[M*3+1]=S[M*3+1]*.5+.43,S[M*3+2]*=.5;let g=new Pt;g.setAttribute("position",new Mt(S,3)),g.setAttribute("normal",new Mt(_,3));let y=new Float32Array(x*2);for(let M=0;M<x;M++)y[M*2]=S[M*3]*1.6+S[M*3+2]*.8,y[M*2+1]=S[M*3+1]*1.2;return g.setAttribute("uv",new Mt(y,2)),u.geometry.dispose(),g}var kh=null;function Av(i,e){let t=i.sampleRate,n=i.createGain();n.gain.value=.9;let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=24,s.Q.value=.6;let r=i.createBiquadFilter();r.type="highshelf",r.frequency.value=9e3,r.gain.value=-3;let a=i.createDynamicsCompressor();a.threshold.value=-20,a.knee.value=12,a.ratio.value=2.2,a.attack.value=.012,a.release.value=.25;let o=i.createDynamicsCompressor();o.threshold.value=-4,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.08,n.connect(s),s.connect(r),r.connect(a),a.connect(o),o.connect(e);let l=i.createConvolver();(()=>{let p=Math.floor(t*3.4),b=Math.floor(t*.022),L=i.createBuffer(2,p,t);for(let P=0;P<2;P++){let D=L.getChannelData(P),N=0,A=0;for(let z=b;z<p;z++){let V=(z-b)/(p-b),Y=.55*Math.pow(1-V,2.2)+.015,$=Math.random()*2-1;N+=Y*($-N),A+=.5*(N-A),D[z]=A*Math.pow(1-V,2.6)*(1+.6*Math.exp(-V*18))}}l.buffer=L})();let c=i.createGain();c.gain.value=.5;let u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=6500,l.connect(u),u.connect(c),c.connect(n);let h=i.createDelay(1.5),f=i.createDelay(1.5),d=i.createGain(),x=i.createBiquadFilter(),S=i.createChannelMerger(2),_=i.createGain(),g=i.createGain();h.delayTime.value=.49,f.delayTime.value=.49,d.gain.value=.38,x.type="lowpass",x.frequency.value=4200,g.gain.value=.32,_.connect(h),h.connect(x),x.connect(f),f.connect(d),d.connect(h),h.connect(S,0,0),f.connect(S,0,1),S.connect(g),g.connect(n),g.connect(l);let y=(()=>{let p=i.createBuffer(2,t*3,t);for(let b=0;b<2;b++){let L=p.getChannelData(b),P=0;for(let D=0;D<L.length;D++){let N=Math.random()*2-1;P=.97*P+.03*N,L[D]=.6*N+2.2*P}}return p})();function M(p,b){let L=i.createBufferSource();return L.buffer=y,L.loop=!0,L.start(p,Math.random()*2),L.stop(p+b+.1),L}function v(p,b,L,P,D=0){let N=i.createOscillator();return N.type=p,N.frequency.setValueAtTime(b,L),N.detune.value=D,N.start(L),N.stop(L+P+.1),N}function T(p,b,L,P,D){let N=i.createGain();return N.gain.setValueAtTime(0,p),N.gain.linearRampToValueAtTime(D,p+b),L>0&&N.gain.setValueAtTime(D,p+b+L),N.gain.setTargetAtTime(0,p+b+L,P/4),N}function w(p){if(i.createStereoPanner){let b=i.createStereoPanner();return b.pan.value=p,b}return i.createGain()}function m(p,{dry:b=1,rev:L=0,echo:P=0,p:D=0}={}){let N=w(D);if(p.connect(N),b){let A=i.createGain();A.gain.value=b,N.connect(A),A.connect(n)}if(L){let A=i.createGain();A.gain.value=L,N.connect(A),A.connect(l)}if(P){let A=i.createGain();A.gain.value=P,N.connect(A),A.connect(_)}}let E=[0,2,4,7,9];function B(p){let b=12*Math.log2(p/440)+69,L=Math.floor((b-2)/12),P=b-2-L*12,D=0,N=99;return E.concat([12]).forEach(A=>{Math.abs(P-A)<N&&(N=Math.abs(P-A),D=A)}),440*Math.pow(2,(L*12+2+D-69)/12)}let C=p=>73.416*Math.pow(2,p/12),F=(p,b)=>p+Math.random()*(b-p),k=(()=>{let p=i.createWaveShaper(),b=1024,L=new Float32Array(b);for(let P=0;P<b;P++){let D=P/(b-1)*2-1;L[P]=Math.tanh(D*2.2)/Math.tanh(2.2)}return p.curve=L,p.oversample="2x",p})(),X=i.createGain();X.gain.value=1,X.connect(k);let O=i.createGain();O.gain.value=.9,k.connect(O),O.connect(n);let q=i.createGain();q.gain.value=.45,O.connect(q),q.connect(l);let Z=[[0,7,14,16,19],[-3,4,12,14,19],[-7,0,9,16,19],[0,7,14,16,21],[2,9,12,16,19],[0,7,14,16,21]],J={P:31,Q:33,N:36,B:38,R:40,K:43},le=null,ee=(()=>{let p=i.createBuffer(1,t*2,t),b=p.getChannelData(0),L=Math.round(t/3e3),P=0;for(let D=0;D<b.length;D++)D%L===0&&(P=Math.round((Math.random()*2-1)*16)/16),b[D]=P;return p})();function ae(p,b){let L=i.createBufferSource();return L.buffer=ee,L.loop=!0,L.start(p,Math.random()*1.5),L.stop(p+b+.05),L}function re(p,b,L,P,D=0,N={}){var Y,$;let A=v(N.type||"square",b,p,L+.05),z=i.createBiquadFilter();z.type="lowpass",z.frequency.value=N.lp||4200,z.Q.value=.7,N.to&&A.frequency.exponentialRampToValueAtTime(N.to,p+L);let V=T(p,.0015,L*.5,L*.5,P*2);A.connect(z),z.connect(V),m(V,{dry:1,rev:(Y=N.rev)!=null?Y:.06,echo:($=N.echo)!=null?$:.12,p:D})}function be(p,b,L){let P=M(p,.012),D=i.createBiquadFilter();D.type="bandpass",D.frequency.value=F(1800,4200),D.Q.value=2.2;let N=T(p,8e-4,0,.006,b*1.8);P.connect(D),D.connect(N),m(N,{dry:1,rev:.04,p:L})}let xe=[C(36),C(39),C(41),C(43),C(46),C(48),C(51),C(53)],se=141.1765,de=60/se,Ee=de*4,ye=de/4,ie={on:!1,live:typeof OfflineAudioContext=="undefined"||!(i instanceof OfflineAudioContext),t0:0,step:0,page:0,urg:[],timer:0};ie.out=i.createGain(),ie.out.gain.value=0,ie.duck=i.createGain(),ie.duck.gain.value=1;let Ie=i.createDynamicsCompressor();Ie.threshold.value=-18,Ie.ratio.value=3,Ie.attack.value=.005,Ie.release.value=.12,ie.out.connect(Ie),Ie.connect(ie.duck);let mt=i.createGain();mt.gain.value=.42,ie.duck.connect(mt),mt.connect(n);let Fe=i.createGain();Fe.gain.value=1,Fe.connect(_);let He=i.createGain();He.gain.value=1,He.connect(l);let Xe=p=>440*Math.pow(2,(p-69)/12);function oe(p,{echo:b=0,rev:L=0,p:P=0}={}){let D=w(P);if(p.connect(D),D.connect(ie.out),b){let N=i.createGain();N.gain.value=b,D.connect(N),N.connect(Fe)}if(L){let N=i.createGain();N.gain.value=L,D.connect(N),N.connect(He)}}function me(p,b){let L=v("sine",165,p,.4);L.frequency.exponentialRampToValueAtTime(55,p+.06),L.frequency.exponentialRampToValueAtTime(44,p+.3);let P=T(p,.002,.02,.26,.55*b);L.connect(P),oe(P);let D=M(p,.01),N=i.createBiquadFilter();N.type="highpass",N.frequency.value=2500;let A=T(p,5e-4,0,.004,.06*b);D.connect(N),N.connect(A),oe(A)}function ge(p,b){let L=M(p,.25),P=i.createBiquadFilter();P.type="bandpass",P.frequency.value=1400,P.Q.value=.9;let D=i.createGain();D.gain.setValueAtTime(0,p),[0,.011,.022].forEach(N=>{D.gain.setValueAtTime(.16*b,p+N),D.gain.setTargetAtTime(.02*b,p+N+.001,.003)}),D.gain.setValueAtTime(.11*b,p+.033),D.gain.setTargetAtTime(0,p+.034,.045),L.connect(P),P.connect(D),oe(D,{rev:.25,p:.05})}function Ce(p,b,L=.03,P=.25){let D=M(p,L+.05),N=i.createBiquadFilter();N.type="highpass",N.frequency.value=7800;let A=T(p,8e-4,0,L,.07*b);D.connect(N),N.connect(A),oe(A,{p:P})}function ve(p,b,L=1){let P=M(p,.012),D=i.createBiquadFilter();D.type="bandpass",D.frequency.value=4200*L,D.Q.value=9;let N=T(p,5e-4,0,.006,.3*b);P.connect(D),D.connect(N),oe(N,{p:-.12});let A=v("sine",2900*L,p,.04),z=T(p,5e-4,0,.012,.06*b);A.connect(z),oe(z,{p:-.12});let V=v("triangle",1150*L,p,.05),Y=T(p,.001,0,.02,.05*b);V.connect(Y),oe(Y,{p:-.12})}function Ke(p,b=1){let L=v("sine",260,p,.08),P=T(p,.001,0,.03,.3*b);L.frequency.exponentialRampToValueAtTime(130,p+.04),L.connect(P),oe(P);let D=M(p,.03),N=i.createBiquadFilter();N.type="bandpass",N.frequency.value=1700,N.Q.value=2.2;let A=T(p,8e-4,0,.012,.3*b);D.connect(N),N.connect(A),oe(A,{rev:.08})}function Oe(p,b=1){let L=M(p,1.6),P=i.createBiquadFilter();P.type="highpass",P.frequency.value=4500;let D=T(p,.002,0,1.1,.05*b);L.connect(P),P.connect(D),oe(D,{rev:.4})}function nt(p,b,L,P,D){let N=i.createBiquadFilter();N.type="lowpass",N.Q.value=5,N.frequency.setValueAtTime(380+1500*D,p),N.frequency.exponentialRampToValueAtTime(220,p+L);let A=T(p,.003,L*.3,L*.6,.085*P);[0,9].forEach(Y=>{v("sawtooth",b,p,L+.05,Y).connect(N)}),N.connect(A),oe(A);let z=v("sine",b/2,p,L+.05),V=T(p,.003,L*.4,L*.5,.07*P);z.connect(V),oe(V)}function et(p,b,L,P,D){let N=i.createBiquadFilter();N.type="lowpass",N.Q.value=3,N.frequency.setValueAtTime(700+2400*P,p),N.frequency.exponentialRampToValueAtTime(520,p+.16);let A=T(p,.002,0,.13,.03*L),z=v("square",b,p,.25),V=v("sawtooth",b*2,p,.25,6),Y=i.createGain();Y.gain.value=.35,z.connect(N),V.connect(Y),Y.connect(N),N.connect(A),oe(A,{echo:.3,p:D})}let gt=[{b:38,a:[62,65,69,72,76]},{b:34,a:[62,65,69,70,74]},{b:41,a:[60,65,69,72,77]},{b:36,a:[60,64,67,72,76]}],W=[0,2,1,3,2,4,3,1,0,2,1,3,4,2,3,1],Nt=[{kick:1,clap:0,hat:.7,bass:.85,arp:.6,tick:1},{kick:1,clap:1,hat:1,bass:1,arp:1,tick:1},{kick:1,clap:1,hat:1,bass:1,arp:1,tick:.9},{kick:0,clap:0,hat:.35,bass:0,arp:.25,tick:.85},{kick:1,clap:1,hat:1,bass:1,arp:.85,tick:.9},{kick:1,clap:.6,hat:.8,bass:.85,arp:1,tick:.7}],it=p=>ie.t0+Math.ceil((p-ie.t0)/Ee)*Ee;function wt(p){for(let[b,L]of ie.urg)if(p>=b&&p<L)return(p-b)/(L-b);return-1}function Me(p,b){let L=Nt[ie.page]||Nt[1],P=(p%16+16)%16,D=Math.floor(p/16),N=(Math.floor(D/2)%4+4)%4,A=gt[N],z=(D%2+2)%2*16+P;L.kick&&P%4===0&&me(b,L.kick),L.clap&&(P===4||P===12)&&ge(b,L.clap),L.hat&&(P%4===2?Ce(b,L.hat,.07,.3):L.hat>.8&&P%2===1&&Ce(b,L.hat*.45,.02,-.25)),L.bass&&P%4!==0&&nt(b,Xe(A.b+(P%4===2?12:0)),ye*.9,L.bass,z/32),L.arp&&et(b,Xe(A.a[W[P]%5]+(W[P]>4?12:0)),L.arp*(P%4===0?1:.75),.15+.85*(z/31),P%2?.35:-.35);let V=wt(b);if(V>=0){let Y=V<.4?4:V<.75?2:1;P%Y===0&&ve(b,L.tick*(.75+.35*V),1+.35*V)}else P%4===0&&ve(b,L.tick*(P%8===0?.9:.7),P%8===0?1:.82)}function bt(p){if(!ie.on)return p;let b=Math.round((p-ie.t0)/ye),L=ie.t0+b*ye;return Math.abs(L-p)<=ye/2+1e-4?Math.max(L,i.currentTime+.005):p}function ke(p){return ie.on?ie.t0+Math.ceil((p-ie.t0)/ye)*ye:p}function Ge(p){let b=Math.floor((p-ie.t0+1e-4)/Ee);return gt[(Math.floor(b/2)%4+4)%4]}function U(p,b,L=1,P=0){b.a.forEach((D,N)=>et(p+N*.004,Xe(D+P),.55*L,1,-.6+N*.3)),nt(p,Xe(b.b),de*.9,.9*L,.8)}function R(p){if(!ie.on)return;let b;for(;(b=ie.t0+ie.step*ye)<p;)b>(ie.live?i.currentTime-.01:-1)&&Me(ie.step,b),ie.step++}function K(p,b,L,P=2.2,D=3.5,N=2.2,A=0,z={}){var ce,Ae;let V=v("sine",b,p,P+.3),Y=v("sine",b*D,p,P+.3),$=i.createGain();$.gain.setValueAtTime(b*N,p),$.gain.setTargetAtTime(b*N*.05,p+.005,P*.18),Y.connect($),$.connect(V.frequency);let te=T(p,.004,0,P,L);V.connect(te);let ue=v("sine",b*2,p,P*.6),pe=T(p,.003,0,P*.5,L*.22);ue.connect(pe),m(te,{dry:.8,rev:(ce=z.rev)!=null?ce:.55,echo:(Ae=z.echo)!=null?Ae:.25,p:A}),m(pe,{dry:.6,rev:.4,echo:.2,p:-A})}function fe(p,b,L,P,D=.18){let N=v("sine",b,p,D+.05),A=v("sine",b,p,D+.05,F(5,9)),z=T(p,.006,0,D,L);N.connect(z),A.connect(z),m(z,{dry:.5,rev:.75,echo:.35,p:P})}return{whoosh(p,b=1.3,L=!0,P=.2){let D=P/.2;for(let $=0;$<2;$++){let te=M(p,b),ue=i.createBiquadFilter(),pe=i.createBiquadFilter();ue.type="bandpass",ue.Q.value=.55,pe.type="lowpass",pe.frequency.value=3800;let ce=L?220:1600,Ae=L?1500:200;ue.frequency.setValueAtTime(ce*($?1.12:.9),p),ue.frequency.exponentialRampToValueAtTime(Ae*($?.92:1.1),p+b*.85);let Be=i.createGain();Be.gain.setValueAtTime(0,p),Be.gain.linearRampToValueAtTime(.11*D,p+b*.55),Be.gain.setTargetAtTime(0,p+b*.6,b*.18),te.connect(ue),ue.connect(pe),pe.connect(Be);let _e=w(0);_e.pan&&(_e.pan.setValueAtTime($?-.7:.7,p),_e.pan.linearRampToValueAtTime($?.5:-.5,p+b)),Be.connect(_e);let ct=i.createGain();ct.gain.value=1,_e.connect(ct),ct.connect(n);let Et=i.createGain();Et.gain.value=.35,_e.connect(Et),Et.connect(l)}let N=v("triangle",C(L?12:19),p,b),A=i.createBiquadFilter();A.type="lowpass",A.frequency.value=900,N.frequency.exponentialRampToValueAtTime(C(L?19:12),p+b*.8);let z=i.createGain();z.gain.setValueAtTime(0,p),z.gain.linearRampToValueAtTime(.03*D,p+b*.5),z.gain.setTargetAtTime(0,p+b*.6,b*.2),N.connect(A),A.connect(z),m(z,{dry:.7,rev:.6});let V=v("sine",C(0)*.75+20,p+b*.62,1.2);V.frequency.exponentialRampToValueAtTime(C(-5),p+b*.62+.9);let Y=T(p+b*.62,.05,0,.9,.16*D);V.connect(Y),m(Y,{dry:1,rev:.15})},rise(p,b=2.2,L=.06){let P=L/.06,D=[C(12),C(19),C(26),C(28),C(31)],N=i.createBiquadFilter();N.type="lowpass",N.Q.value=.9,N.frequency.setValueAtTime(260,p),N.frequency.exponentialRampToValueAtTime(3200,p+b*.9);let A=i.createGain();A.gain.setValueAtTime(0,p),A.gain.linearRampToValueAtTime(.14*P,p+b*.7),A.gain.setTargetAtTime(0,p+b*.75,b*.12),D.forEach((z,V)=>{[-7,7].forEach(Y=>{let $=v("sawtooth",z,p,b+.5,Y),te=i.createGain();te.gain.value=1/(V+2.5),$.connect(te),te.connect(N)})}),N.connect(A),m(A,{dry:.7,rev:.7,echo:.1}),this.shimmer(p+b*.35,b*.65,.03*P)},shimmer(p,b=.8,L=.04){let P=L/.04,D=Math.max(4,Math.floor(b*16));for(let N=0;N<D;N++){let A=p+Math.pow(Math.random(),.8)*b,z=Math.random()<.6?36:48,V=C(z+E[Math.floor(Math.random()*5)]);fe(A,V,.04*P*F(.5,1),F(-.8,.8),F(.12,.3))}},clack(p,b=1,L=.5){let P=Math.min(1.3,L/.5),D=640*b,N=M(p,.03),A=i.createBiquadFilter();A.type="bandpass",A.frequency.value=4200,A.Q.value=1.1;let z=T(p,.0015,0,.012,.06*P);N.connect(A),A.connect(z),m(z,{dry:1,rev:.12}),[[1,.09,.06],[2.32,.05,.035],[4.25,.03,.02],[6.63,.02,.012]].forEach(([$,te,ue])=>{let pe=v("sine",D*$,p,ue*4),ce=T(p,.0015,0,ue,te*P);pe.connect(ce),m(ce,{dry:1,rev:.18,echo:.04})});let V=v("sine",120,p,.15);V.frequency.exponentialRampToValueAtTime(70,p+.1);let Y=T(p,.002,0,.06,.12*P);V.connect(Y),m(Y,{dry:1})},slide(p,b=.5,L=.05){let P=L/.05,D=M(p,b),N=i.createBiquadFilter();N.type="bandpass",N.Q.value=2.2,N.frequency.setValueAtTime(2600,p),N.frequency.exponentialRampToValueAtTime(4200,p+b);let A=i.createGain();A.gain.setValueAtTime(0,p),A.gain.linearRampToValueAtTime(.03*P,p+b*.35),A.gain.setTargetAtTime(0,p+b*.7,b*.12),D.connect(N),N.connect(A),m(A,{dry:.8,rev:.4});let z=v("sine",C(31),p,b),V=i.createGain();V.gain.setValueAtTime(0,p),V.gain.linearRampToValueAtTime(.006*P,p+b*.5),V.gain.setTargetAtTime(0,p+b*.6,b*.1),z.connect(V),m(V,{dry:.6,rev:.6})},thud(p,b=.45){let L=b/.45,P=v("sine",68,p,.7);P.frequency.exponentialRampToValueAtTime(C(-5),p+.45);let D=T(p,.006,.02,.45,.32*L);P.connect(D),m(D,{dry:1,rev:.12});let N=M(p,.2),A=i.createBiquadFilter();A.type="lowpass",A.frequency.value=320;let z=T(p,.003,0,.09,.12*L);N.connect(A),A.connect(z),m(z,{dry:1,rev:.2}),fe(p+.004,C(45),.02*L,.2,.25)},boom(p,b=.5){let L=b/.5,P=v("sine",C(0),p,2.2);P.frequency.exponentialRampToValueAtTime(C(-12)*1.05,p+1.6);let D=T(p,.008,.05,1.5,.36*L);P.connect(D),m(D,{dry:1,rev:.25});let N=v("sine",C(12),p,.6);N.frequency.exponentialRampToValueAtTime(C(0),p+.4);let A=T(p,.004,0,.3,.14*L);N.connect(A),m(A,{dry:1,rev:.3});let z=M(p,2.5),V=i.createBiquadFilter();V.type="lowpass",V.frequency.setValueAtTime(1400,p),V.frequency.exponentialRampToValueAtTime(140,p+1.8);let Y=T(p,.004,0,1.4,.1*L);z.connect(V),V.connect(Y),m(Y,{dry:.6,rev:.9}),K(p+.01,C(36),.035*L,3.2,1.41,1.6,-.3,{rev:.9,echo:.15}),K(p+.02,C(43),.02*L,2.6,1.41,1.2,.35,{rev:.9,echo:.15})},tick(p,b=2e3,L=.05){let P=L/.05,D=F(-.45,.45),N=v("sine",B(b),p,.16),A=T(p,7e-4,0,.045,.07*P);N.connect(A),m(A,{dry:.9,rev:.25,echo:.3,p:D});let z=v("sine",B(b)*2.76,p,.06),V=T(p,5e-4,0,.012,.02*P);z.connect(V),m(V,{dry:1,echo:.1,p:D})},ping(p,b=1320,L=.08){K(p,B(b),.1*(L/.08),2.4,3.5,1.8,F(-.2,.2))},chime(p,b=660,L=.07){let P=L/.07,D=B(b);[[0,1],[.09,1.5],[.18,2]].forEach(([N,A],z)=>K(p+N,B(D*A),.045*P/(1+z*.4),2.6,3.5,1.5,(z-1)*.4))},zap(p,b=.04){let L=b/.04,P=M(p,.3),D=i.createBiquadFilter();D.type="bandpass",D.Q.value=3,D.frequency.setValueAtTime(5200,p),D.frequency.exponentialRampToValueAtTime(2200,p+.25);let N=T(p,.03,.05,.12,.14*L);P.connect(D),D.connect(N),m(N,{dry:.8,rev:.3,echo:.2,p:F(-.3,.3)}),fe(p+.2,C(43),.05*L,F(-.3,.3),.2)},blip(p,b=.025){let L=b/.025,P=C(36+E[Math.floor(Math.random()*5)]+(Math.random()<.3?12:0)),D=v("sine",P,p,.08),N=T(p,.002,.01,.03,.06*L);D.connect(N),m(N,{dry:.8,rev:.2,echo:.35,p:F(-.6,.6)})},pad(p,b=3,L=.05){let P=L/.05,D=i.createBiquadFilter();D.type="lowpass",D.Q.value=.5,D.frequency.setValueAtTime(300,p),D.frequency.linearRampToValueAtTime(1100,p+b*.5),D.frequency.linearRampToValueAtTime(600,p+b);let N=i.createGain();N.gain.setValueAtTime(0,p),N.gain.linearRampToValueAtTime(.045*P,p+1.1),N.gain.setValueAtTime(.045*P,p+b*.55),N.gain.linearRampToValueAtTime(0,p+b+.6),[C(12),C(19),C(26),C(28),C(31)].forEach((V,Y)=>{[-8,8].forEach($=>{let te=v("sawtooth",V,p,b+.8,$),ue=i.createGain();ue.gain.value=1/(Y+2),te.connect(ue),ue.connect(D)})}),D.connect(N),m(N,{dry:.75,rev:.75});let A=v("sine",C(0),p,b+.8),z=i.createGain();z.gain.setValueAtTime(0,p),z.gain.linearRampToValueAtTime(.06*P,p+1.2),z.gain.linearRampToValueAtTime(0,p+b+.6),A.connect(z),m(z,{dry:1})},bed(p,b=0){if(le){this.bedTo(p,b);return}let L=i.createGain();L.gain.setValueAtTime(0,p),L.gain.linearRampToValueAtTime(1,p+4);let P=i.createGain();P.gain.value=1,L.connect(P);let D=i.createBiquadFilter();D.type="lowpass",D.Q.value=.5,D.frequency.value=520;let N=i.createOscillator(),A=i.createGain();N.frequency.value=.045,A.gain.value=220,N.connect(A),A.connect(D.frequency),N.start(p);let z=Z[b%Z.length].map((ct,Et)=>{let In=i.createGain();In.gain.value=.016/(1+Et*.25);let eo=[-9,9].map(Xc=>{let fi=i.createOscillator();return fi.type="sawtooth",fi.frequency.value=C(ct),fi.detune.value=Xc,fi.connect(In),fi.start(p),fi}),Ps=w((Et%2?1:-1)*(.25+Et*.1));return In.connect(Ps),Ps.connect(D),{os:eo,n:ct}}),V=ct=>{let Et=C(ct-12);return Et<42?Et*2:Et},Y=i.createOscillator(),$=i.createGain();Y.frequency.value=V(Z[b%Z.length][0]),$.gain.value=.012,Y.connect($),$.connect(L),Y.start(p);let te=i.createBufferSource();te.buffer=y,te.loop=!0,te.start(p);let ue=i.createBiquadFilter();ue.type="bandpass",ue.frequency.value=2400,ue.Q.value=.4;let pe=i.createGain();pe.gain.value=.0035;let ce=i.createOscillator(),Ae=i.createGain();ce.frequency.value=.07,Ae.gain.value=.0025,ce.connect(Ae),Ae.connect(pe.gain),ce.start(p),te.connect(ue),ue.connect(pe),pe.connect(L),D.connect(L);let Be=i.createGain();Be.gain.value=.85,P.connect(Be),Be.connect(n);let _e=i.createGain();_e.gain.value=.7,P.connect(_e),_e.connect(l),le={voices:z,sub:Y,out:L,duck:P,page:b,subF:V}},bedTo(p,b){if(!le||le.page===b)return;le.page=b;let L=Z[b%Z.length];le.voices.forEach((P,D)=>P.os.forEach(N=>{N.frequency.cancelScheduledValues(p),N.frequency.setValueAtTime(N.frequency.value,p),N.frequency.exponentialRampToValueAtTime(C(L[D]),p+2.6)})),le.sub.frequency.cancelScheduledValues(p),le.sub.frequency.setValueAtTime(le.sub.frequency.value,p),le.sub.frequency.exponentialRampToValueAtTime(le.subF(L[0]),p+2.6)},duck(p,b){le&&(le.duck.gain.cancelScheduledValues(p),le.duck.gain.setTargetAtTime(b?.45:1,p,b?.15:.8)),ie.duck.gain.cancelScheduledValues(p),ie.duck.gain.setTargetAtTime(b?.4:1,p,b?.12:.6)},scan(p,b=2.2,L="Q"){let P=p+b,D=C(J[L]||36);for(let ue=0;ue<2;ue++){let pe=M(p,b+.2),ce=i.createBiquadFilter();ce.type="bandpass",ce.Q.value=7,ce.frequency.setValueAtTime(260*(ue?1.5:1),p),ce.frequency.exponentialRampToValueAtTime(3600*(ue?1.5:1),P);let Ae=i.createGain();Ae.gain.setValueAtTime(0,p),Ae.gain.linearRampToValueAtTime(.05,p+b*.5),Ae.gain.linearRampToValueAtTime(0,P+.05),pe.connect(ce),ce.connect(Ae),m(Ae,{dry:.7,rev:.6,p:ue?.35:-.35})}let N=v("sine",D/4,p,b+.3);N.frequency.exponentialRampToValueAtTime(D/2,P);let A=i.createGain();A.gain.setValueAtTime(0,p),A.gain.linearRampToValueAtTime(.03,p+b*.6),A.gain.linearRampToValueAtTime(0,P+.1),N.connect(A),m(A,{dry:.8,rev:.6});for(let ue=0;ue<9;ue++){let pe=ue/9;fe(p+pe*b*.92,C(31+E[ue%5]+(ue>4?12:0)),.022*(.4+pe),(ue%2?1:-1)*.5,.22)}let z=M(P-.45,.5),V=i.createBiquadFilter();V.type="bandpass",V.frequency.value=1800,V.Q.value=.8;let Y=i.createGain();Y.gain.setValueAtTime(1e-4,P-.45),Y.gain.exponentialRampToValueAtTime(.06,P-.01),Y.gain.linearRampToValueAtTime(0,P+.02),z.connect(V),V.connect(Y),m(Y,{dry:.6,rev:.5}),K(P,D,.06,3,3.5,1.3,0,{rev:.8,echo:.3}),K(P+.004,D*1.5,.02,2.2,1.41,.8,.3,{rev:.9,echo:.2});let $=v("sine",C(-12)*1.4,P,.6);$.frequency.exponentialRampToValueAtTime(C(-12),P+.3);let te=T(P,.006,0,.35,.16);$.connect(te),m(te,{dry:1})},swoosh(p,b=1.2){for(let A=0;A<2;A++){let z=M(p,b+.3),V=i.createBiquadFilter(),Y=i.createBiquadFilter();V.type="bandpass",V.Q.value=1.3,Y.type="lowpass",Y.frequency.value=5e3,V.frequency.setValueAtTime(240,p),V.frequency.exponentialRampToValueAtTime(2100,p+b*.55),V.frequency.exponentialRampToValueAtTime(380,p+b);let $=i.createGain();$.gain.setValueAtTime(0,p),$.gain.linearRampToValueAtTime(.028,p+b*.3),$.gain.exponentialRampToValueAtTime(.13,p+b*.55),$.gain.setTargetAtTime(0,p+b*.58,b*.16),z.connect(V),V.connect(Y),Y.connect($);let te=w(0);te.pan&&(te.pan.setValueAtTime(A?-.85:-.4,p),te.pan.linearRampToValueAtTime(A?.4:.85,p+b)),$.connect(te);let ue=i.createGain();ue.gain.value=1,te.connect(ue),ue.connect(n);let pe=i.createGain();pe.gain.value=.3,te.connect(pe),pe.connect(l)}let L=i.createBiquadFilter();L.type="lowpass",L.Q.value=4,L.frequency.setValueAtTime(220,p),L.frequency.exponentialRampToValueAtTime(1600,p+b*.55),L.frequency.exponentialRampToValueAtTime(300,p+b);let P=i.createGain();P.gain.setValueAtTime(0,p),P.gain.linearRampToValueAtTime(.022,p+b*.55),P.gain.setTargetAtTime(0,p+b*.6,b*.15),[C(0),C(7),C(12)].forEach(A=>[-12,12].forEach(z=>{v("sawtooth",A,p,b+.2,z).connect(L)})),L.connect(P),m(P,{dry:.8,rev:.4});let D=v("sine",34,p,b+.2);D.frequency.exponentialRampToValueAtTime(58,p+b);let N=i.createGain();N.gain.setValueAtTime(0,p),N.gain.linearRampToValueAtTime(.14,p+b*.85),N.gain.linearRampToValueAtTime(0,p+b+.1),D.connect(N),m(N,{dry:1})},braam(p,b=1){b*=.62;let L=i.createBiquadFilter();L.type="lowpass",L.Q.value=2.2,L.frequency.setValueAtTime(110,p),L.frequency.exponentialRampToValueAtTime(1500,p+.07),L.frequency.exponentialRampToValueAtTime(380,p+.9),L.frequency.exponentialRampToValueAtTime(140,p+2.6);let P=i.createGain();P.gain.setValueAtTime(0,p),P.gain.linearRampToValueAtTime(.16*b,p+.018),P.gain.setTargetAtTime(.1*b,p+.05,.25),P.gain.setTargetAtTime(0,p+.7,.55),[[C(-12),1],[C(0),.8],[C(7),.55],[C(12),.4]].forEach(([Y,$])=>[-11,0,11].forEach(te=>{let ue=v("sawtooth",Y,p,3.4,te),pe=i.createGain();pe.gain.value=$/3,ue.connect(pe),pe.connect(L)})),L.connect(P),P.connect(X);let D=v("sine",C(0),p,2.6);D.frequency.exponentialRampToValueAtTime(C(-12)*.82,p+1.8);let N=T(p,.006,.08,1.4,.42*b);D.connect(N),m(N,{dry:1,rev:.15});let A=M(p,2.2),z=i.createBiquadFilter();z.type="lowpass",z.frequency.setValueAtTime(2600,p),z.frequency.exponentialRampToValueAtTime(180,p+1.6);let V=T(p,.003,0,.9,.07*b);A.connect(z),z.connect(V),m(V,{dry:.6,rev:1}),K(p+.01,C(43),.025*b,4,1.41,1.2,-.4,{rev:1,echo:.2}),K(p+.02,C(50),.016*b,3.6,1.41,1,.4,{rev:1,echo:.2})},mech(p,b=6,L=.05){for(let A=0;A<b;A++){let z=p+A*L,V=-.6+1.2*A/Math.max(1,b-1),Y=M(z,.03),$=i.createBiquadFilter();$.type="bandpass",$.frequency.value=3200+A*260,$.Q.value=3;let te=T(z,.001,0,.012,.05);Y.connect($),$.connect(te),m(te,{dry:1,rev:.15,echo:.08,p:V}),[[1,.018,.05],[2.71,.008,.03]].forEach(([ue,pe,ce])=>{let Ae=v("sine",(1250+A*90)*ue,z,ce*4),Be=T(z,.001,0,ce,pe);Ae.connect(Be),m(Be,{dry:1,rev:.2,p:V})})}let P=v("sawtooth",140,p,b*L+.4),D=i.createBiquadFilter();D.type="bandpass",D.Q.value=5,D.frequency.setValueAtTime(500,p),D.frequency.exponentialRampToValueAtTime(1300,p+b*L+.25),P.frequency.exponentialRampToValueAtTime(260,p+b*L+.3);let N=i.createGain();N.gain.setValueAtTime(0,p),N.gain.linearRampToValueAtTime(.012,p+.06),N.gain.linearRampToValueAtTime(0,p+b*L+.35),P.connect(D),D.connect(N),m(N,{dry:.8,rev:.3})},hud(p,b=0){let L=C(48+E[b%5]+(b>=5?12:0)),P=-.5+b%6*.2,D=v("sine",L,p,.12),N=T(p,.0015,.01,.05,.035);D.connect(N),m(N,{dry:.8,rev:.3,echo:.35,p:P});let A=v("sine",L*2.01,p,.05),z=T(p,.001,0,.015,.01);A.connect(z),m(z,{dry:1,p:P})},implode(p,b=1){for(let D=0;D<2;D++){let N=M(p,b+.05),A=i.createBiquadFilter();A.type="bandpass",A.Q.value=1.6,A.frequency.setValueAtTime(3800,p),A.frequency.exponentialRampToValueAtTime(420,p+b);let z=i.createGain();z.gain.setValueAtTime(1e-4,p),z.gain.exponentialRampToValueAtTime(.18,p+b-.02),z.gain.linearRampToValueAtTime(0,p+b+.01),N.connect(A),A.connect(z),m(z,{dry:.9,rev:.25,p:D?.6:-.6})}let L=i.createBiquadFilter();L.type="lowpass",L.Q.value=3,L.frequency.setValueAtTime(2400,p),L.frequency.exponentialRampToValueAtTime(260,p+b);let P=i.createGain();P.gain.setValueAtTime(1e-4,p),P.gain.exponentialRampToValueAtTime(.05,p+b-.02),P.gain.linearRampToValueAtTime(0,p+b+.01),[C(12),C(19),C(24)].forEach(D=>[-10,10].forEach(N=>{let A=v("sawtooth",D,p,b+.1,N);A.frequency.setValueAtTime(D*1.06,p),A.frequency.exponentialRampToValueAtTime(D,p+b),A.connect(L)})),L.connect(P),m(P,{dry:.8,rev:.2})},lock(p,b=1){b*=.75;let L=v("sine",110,p,.5);L.frequency.exponentialRampToValueAtTime(C(-12)*1,p+.18);let P=T(p,.002,.02,.22,.34*b);L.connect(P),m(P,{dry:1,rev:.15});let D=M(p,.06),N=i.createBiquadFilter();N.type="bandpass",N.frequency.value=900,N.Q.value=1.5;let A=T(p,.0015,0,.025,.08*b);D.connect(N),N.connect(A),m(A,{dry:1,rev:.3}),[[C(36),.02],[C(36)*2.76,.008],[C(36)*5.4,.004]].forEach(([z,V])=>{let Y=v("sine",z,p,1.2),$=T(p,.002,0,.9,V*b);Y.connect($),m($,{dry:.7,rev:.8,echo:.2})})},mStart(p,b=0){ie.on||(ie.on=!0,ie.t0=p,ie.step=0,ie.page=b,ie.urg=[],ie.duck.gain.value=1,ie.out.gain.cancelScheduledValues(p),ie.out.gain.setValueAtTime(0,p),ie.out.gain.linearRampToValueAtTime(1,p+.8),ie.live&&(ie.timer=setInterval(()=>R(i.currentTime+.16),25)))},mAlign(p,b){if(!ie.on)return;let L=Ee*2,P=b-Math.floor((b-p)/L)*L;for(;P>p+.02;)P-=L;ie.t0=P,ie.step=Math.ceil((p+.03-P)/ye)},mPage(p,b){ie.page=b},mFill(p){if(!ie.on)return;let b=it(p+.15),L=Math.min(8,Math.floor((b-p)/(ye/2)));for(let P=0;P<L;P++)ve(b-(L-P)*ye/2,.5+.5*P/Math.max(1,L),1+.4*P/Math.max(1,L));Oe(b,1),Ke(b,.8)},mUrgent(p,b){ie.urg.push([p,p+b]),ie.urg=ie.urg.filter(L=>L[1]>p-1)},mPressNow(p,b=1){Ke(p,b)},mRender(p,b,L=0,P=[]){ie.on=!0,ie.t0=p,ie.step=0,ie.page=L,ie.urg=P,ie.out.gain.value=1,R(p+b*Ee)},scanM(p,b=2.2,L="Q"){let P=bt(p+b),D=Ge(P-.05);ie.on&&this.mUrgent(p,P-p);let N=ke(p+.05),A=Math.max(1,Math.round((P-N)/ye));for(let $=0;$<A;$++){let te=$/A,ue=D.a[$%5]+12*Math.floor($/5)-12;et(N+$*ye,Xe(ue),.45+.75*te,.1+.9*te,$%2?.4:-.4)}let z=M(P-.42,.45),V=i.createBiquadFilter();V.type="bandpass",V.Q.value=1.2,V.frequency.setValueAtTime(900,P-.42),V.frequency.exponentialRampToValueAtTime(6e3,P);let Y=i.createGain();Y.gain.setValueAtTime(1e-4,P-.42),Y.gain.exponentialRampToValueAtTime(.05,P-.01),Y.gain.linearRampToValueAtTime(0,P+.01),z.connect(V),V.connect(Y),oe(Y),Ke(P,1),me(P,.8),U(P,D,1.15)},chargeM(p,b=1){let L=bt(p+b),P=ke(p),D=[];for(;P<L-.01;){let V=(P-p)/Math.max(.1,L-p);D.push([P,V]),P+=V<.45?ye*2:V<.8?ye:ye/2}D.forEach(([V,Y])=>{let $=M(V,.08),te=i.createBiquadFilter();te.type="bandpass",te.frequency.value=1100+2200*Y,te.Q.value=1.1;let ue=T(V,.001,0,.05,.05+.1*Y);$.connect(te),te.connect(ue),oe(ue,{rev:.12})});let N=M(p,L-p+.05),A=i.createBiquadFilter();A.type="bandpass",A.Q.value=.7,A.frequency.setValueAtTime(600,p),A.frequency.exponentialRampToValueAtTime(7e3,L);let z=i.createGain();z.gain.setValueAtTime(1e-4,p),z.gain.exponentialRampToValueAtTime(.06,L),z.gain.linearRampToValueAtTime(0,L+.02),N.connect(A),A.connect(z),oe(z),ie.on&&this.mUrgent(p,L-p)},deployM(p){let b=bt(p),L=Ge(b);me(b,1.2),ge(b,.9),Oe(b,1.1),Ke(b,.7),nt(b,Xe(L.b),de*1.6,1.4,1),U(b,L,1.2,-12);let P=ae(b,.1),D=i.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(5e3,b),D.frequency.exponentialRampToValueAtTime(600,b+.08);let N=T(b,.001,.01,.04,.08);P.connect(D),D.connect(N),oe(N);for(let A=0;A<6;A++)et(b+(A+1)*ye,Xe(L.a[(4-A%5+5)%5]+12),.8-A*.08,.9-A*.1,A%2?.5:-.5)},nodeM(p,b=0){let L=bt(p),P=Ge(L);et(L,Xe(P.a[b%5]+12+(b>=5?12:0)),.9,.8,-.5+b*.2),ve(L,.5,1.2)},typeM(p,b=0,L=8){let P=bt(p),D=-.5+b*.2;for(let N=0;N<L;N++)be(P+N*ye/2,.05*(N%2?.7:1),D)},streamM(p,b=0){let L=bt(p),P=Ge(L);for(let D=0;D<3;D++)et(L+D*ye/2,Xe(P.a[(b+D*2)%5]+24),.45,1,-.5+b*.2)},retractM(p,b=1){let L=bt(p+b),P=Ge(L),D=ke(p),N=Math.max(1,Math.round((L-D)/ye));for(let Y=0;Y<N;Y++){let $=Y/N;et(D+Y*ye,Xe(P.a[(5-Y%5)%5]+12-12*Math.floor(Y/5)),.5+.5*$,.9-.6*$,Y%2?.4:-.4)}let A=M(p,L-p+.02),z=i.createBiquadFilter();z.type="bandpass",z.Q.value=1.2,z.frequency.setValueAtTime(6500,p),z.frequency.exponentialRampToValueAtTime(700,L);let V=i.createGain();V.gain.setValueAtTime(1e-4,p),V.gain.exponentialRampToValueAtTime(.06,L),V.gain.linearRampToValueAtTime(0,L+.01),A.connect(z),z.connect(V),oe(V)},lockM(p){let b=bt(p),L=Ge(b);me(b,1),Ke(b,1),ge(b,.6),U(b,L,1)},compute(p,b=.8,L=26,P=1,D=0,N=8){let A=Math.floor(b*L);for(let z=0;z<A;z++){let V=p+z/L+F(0,.25)/L;re(V,xe[D+Math.floor(Math.random()*(N-D))]*(Math.random()<.25?2:1),.6/L,.016*P*F(.6,1),F(-.7,.7))}},scanT(p,b=2.2,L="Q"){let P=p+b,D="PQNBRK".indexOf(L);ie.on&&this.mUrgent(p,b);let N=v("sine",C(39),p,b);N.frequency.exponentialRampToValueAtTime(C(51),P);let A=i.createGain();A.gain.setValueAtTime(0,p),A.gain.linearRampToValueAtTime(.018,p+b*.8),A.gain.linearRampToValueAtTime(0,P),N.connect(A),m(A,{dry:1,rev:.05});let z=ae(p,b),V=i.createBiquadFilter();V.type="bandpass",V.Q.value=3,V.frequency.setValueAtTime(1500,p),V.frequency.exponentialRampToValueAtTime(5200,P);let Y=i.createGain();Y.gain.setValueAtTime(0,p),Y.gain.linearRampToValueAtTime(.02,p+b*.5),Y.gain.linearRampToValueAtTime(0,P),z.connect(V),V.connect(Y),m(Y,{dry:1,p:.2}),Ke(P,.9);let $=v("sine",120,P,.25);$.frequency.exponentialRampToValueAtTime(52,P+.12);let te=T(P,.002,.01,.1,.14);$.connect(te),m(te,{dry:1});let ue=ae(P,.03),pe=i.createBiquadFilter();pe.type="lowpass",pe.frequency.value=3800;let ce=T(P,.001,0,.012,.05);ue.connect(pe),pe.connect(ce),m(ce,{dry:1});let Ae=xe[2+D%3],Be=xe[4+D%4];re(P+.01,Ae,.05,.03,-.15,{echo:.18}),re(P+.075,Be,.07,.03,.15,{echo:.22})},chargeT(p,b=1){let L=ae(p,b),P=i.createBiquadFilter();P.type="bandpass",P.Q.value=1.6,P.frequency.setValueAtTime(500,p),P.frequency.exponentialRampToValueAtTime(4800,p+b);let D=i.createGain(),N=v("square",12,p,b),A=i.createGain();N.frequency.exponentialRampToValueAtTime(48,p+b),D.gain.value=.5,A.gain.value=.5,N.connect(A),A.connect(D.gain);let z=i.createGain();z.gain.setValueAtTime(1e-4,p),z.gain.exponentialRampToValueAtTime(.1,p+b),z.gain.linearRampToValueAtTime(0,p+b+.02),L.connect(P),P.connect(D),D.connect(z),m(z,{dry:1,rev:.05});let V=v("sawtooth",110,p,b),Y=i.createBiquadFilter();Y.type="lowpass",Y.Q.value=6,Y.frequency.setValueAtTime(300,p),Y.frequency.exponentialRampToValueAtTime(2600,p+b),V.frequency.exponentialRampToValueAtTime(440,p+b);let $=i.createGain();$.gain.setValueAtTime(1e-4,p),$.gain.exponentialRampToValueAtTime(.05,p+b),$.gain.linearRampToValueAtTime(0,p+b+.02),V.connect(Y),Y.connect($),m($,{dry:1,rev:.05}),this.compute(p+b*.35,b*.65,30,.8)},deployT(p){let b=v("sine",78,p,.6);b.frequency.exponentialRampToValueAtTime(36,p+.35);let L=T(p,.003,.03,.3,.3);b.connect(L),m(L,{dry:1,rev:.06});let P=ae(p,.12),D=i.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(5e3,p),D.frequency.exponentialRampToValueAtTime(500,p+.1);let N=T(p,.001,.01,.05,.12);P.connect(D),D.connect(N),m(N,{dry:1,rev:.1}),[[530,.05,.16],[1290,.025,.1],[2210,.012,.06]].forEach(([Y,$,te])=>{let ue=v("sine",Y,p,te*4),pe=T(p,.001,0,te,$);ue.connect(pe),m(pe,{dry:1,rev:.12,echo:.05})});let A=v("sawtooth",180,p+.04,.8),z=i.createBiquadFilter();z.type="bandpass",z.Q.value=6,z.frequency.setValueAtTime(700,p+.04),z.frequency.exponentialRampToValueAtTime(2200,p+.7),A.frequency.exponentialRampToValueAtTime(420,p+.7);let V=i.createGain();V.gain.setValueAtTime(0,p+.04),V.gain.linearRampToValueAtTime(.025,p+.12),V.gain.linearRampToValueAtTime(0,p+.8),A.connect(z),z.connect(V),m(V,{dry:1,rev:.05,p:-.2}),this.compute(p+.1,.9,32,1)},nodeT(p,b=0){re(p,xe[(b+3)%8]*2,.035,.026,-.5+b*.2,{echo:.2})},traceT(p,b=0){re(p,xe[b%8],.16,.012,-.5+b*.2,{type:"sine",to:xe[b%8]*2,echo:.1})},typeT(p,b=0,L=9){let P=-.5+b*.2;for(let D=0;D<L;D++)be(p+D*.028+F(0,.012),.05*F(.6,1),P);re(p+L*.028+.03,xe[b*3%8]*2,.04,.02,P,{echo:.25})},streamT(p,b=0){for(let L=0;L<5;L++)re(p+L*.022,xe[(b+L*2)%8]*2,.014,.01,-.5+b*.2,{echo:.05})},retractT(p,b=1){for(let A=0;A<14;A++){let z=1-Math.pow(1-A/14,1.8);re(p+z*b,xe[7-A%8]*(A<14/2?2:1),.03,.014+.012*A/14,(A%2?1:-1)*.4)}let P=ae(p,b),D=i.createBiquadFilter();D.type="bandpass",D.Q.value=2,D.frequency.setValueAtTime(5e3,p),D.frequency.exponentialRampToValueAtTime(600,p+b);let N=i.createGain();N.gain.setValueAtTime(1e-4,p),N.gain.exponentialRampToValueAtTime(.08,p+b),N.gain.linearRampToValueAtTime(0,p+b+.02),P.connect(D),D.connect(N),m(N,{dry:1,rev:.04})},lockT(p){let b=v("sine",140,p,.3);b.frequency.exponentialRampToValueAtTime(48,p+.1);let L=T(p,.0015,.01,.1,.24);b.connect(L),m(L,{dry:1,rev:.04});let P=ae(p,.04),D=i.createBiquadFilter();D.type="lowpass",D.frequency.value=3e3;let N=T(p,.001,0,.014,.08);P.connect(D),D.connect(N),m(N,{dry:1}),re(p+.04,xe[1],.04,.026,-.1,{echo:.15}),re(p+.1,xe[5],.06,.026,.1,{echo:.2})},gather(p,b=2.2,L=1){for(let te=0;te<2;te++){let ue=M(p,b),pe=i.createBiquadFilter();pe.type="bandpass",pe.Q.value=.8,pe.frequency.setValueAtTime(400,p),pe.frequency.exponentialRampToValueAtTime(3200,p+b);let ce=i.createGain();ce.gain.setValueAtTime(0,p),ce.gain.linearRampToValueAtTime(.02*L,p+b*.5),ce.gain.exponentialRampToValueAtTime(.09*L,p+b),ce.gain.setTargetAtTime(0,p+b,.03),ue.connect(pe),pe.connect(ce);let Ae=w(0);Ae.pan&&(Ae.pan.setValueAtTime(te?-.9:.9,p),Ae.pan.linearRampToValueAtTime(0,p+b)),ce.connect(Ae);let Be=i.createGain();Be.gain.value=1,Ae.connect(Be),Be.connect(n)}let P=i.createBiquadFilter();P.type="lowpass",P.Q.value=1.2,P.frequency.setValueAtTime(200,p),P.frequency.exponentialRampToValueAtTime(2600,p+b);let D=i.createGain();D.gain.setValueAtTime(0,p),D.gain.linearRampToValueAtTime(.012*L,p+b*.4),D.gain.exponentialRampToValueAtTime(.05*L,p+b),D.gain.setTargetAtTime(0,p+b,.025),[C(12),C(19),C(24),C(28)].forEach(te=>{[-6,6].forEach(ue=>{let pe=v("sawtooth",te,p,b+.1,ue);pe.frequency.setValueAtTime(te*.94,p),pe.frequency.exponentialRampToValueAtTime(te,p+b),pe.connect(P)})}),P.connect(D),m(D,{dry:.8,rev:.3});for(let te=0;te<26;te++){let ue=Math.pow(te/26,.55);fe(p+ue*b,C(36+E[te%5]+te%2*12),.012*L,F(-.7,.7),.12)}let N=p+b,A=v("sine",C(0)*1.2,N,2.4);A.frequency.exponentialRampToValueAtTime(C(-12)*1.1,N+1.4);let z=T(N,.004,.06,1.6,.4*L);A.connect(z),m(z,{dry:1,rev:.25});let V=M(N,1.8),Y=i.createBiquadFilter();Y.type="lowpass",Y.frequency.setValueAtTime(2400,N),Y.frequency.exponentialRampToValueAtTime(160,N+1.5);let $=T(N,.002,0,1,.07*L);V.connect(Y),Y.connect($),m($,{dry:.5,rev:1}),K(N+.005,C(26),.05*L,3.6,1.41,1.4,-.15,{rev:.9,echo:.2}),K(N+.012,C(33),.035*L,3.2,3.5,1.2,.2,{rev:.9,echo:.25}),K(N+.02,C(40),.02*L,2.8,3.5,1,0,{rev:1,echo:.3})}}}var Je=(()=>{let i=null,e=null,t=null,n=!1,s=!0,r=!1,a=0,o=null,l=null,c=.8;try{s=localStorage.getItem("mc.sound")!=="off"}catch{}let u={};function h(){if(i)return!0;let v=window.AudioContext||window.webkitAudioContext;return v?(i=new v,i.onstatechange=()=>{i.state==="running"&&!r&&x()},e=i.createGain(),e.gain.value=0,e.connect(i.destination),t=Av(i,e),o=i.createAnalyser(),o.fftSize=256,l=new Uint8Array(o.fftSize),!0):!1}let f=()=>n&&i&&i.state==="running"&&!document.hidden;function d(v){n=!!v&&!!i,i&&(n&&i.state!=="running"&&i.resume(),e.gain.setTargetAtTime(n?c:0,i.currentTime,.06)),document.documentElement.classList.toggle("snd-on",n||!r&&s)}function x(){if(!r&&(r=!0,a=performance.now(),d(s),Object.keys(u).forEach(M),y.onStart))try{y.onStart()}catch{}}function S(){if(r||!h())return;if(i.state==="running"){x();return}try{let T=i.createBufferSource();T.buffer=i.createBuffer(1,1,22050),T.connect(i.destination),T.start(0)}catch{}let v=i.resume();v&&v.then&&v.then(()=>{i.state==="running"&&x()}).catch(()=>{})}function _(){r?performance.now()-a<600?(s=!0,d(!0)):(s=!n,d(s)):(s=!0,S());try{localStorage.setItem("mc.sound",s?"on":"off")}catch{}}let g=()=>i.currentTime+.012,y={};["whoosh","rise","shimmer","clack","slide","thud","boom","tick","ping","chime","zap","blip","pad","gather","scan","swoosh","braam","mech","hud","implode","lock","bed","bedTo","duck","compute","scanT","chargeT","deployT","nodeT","traceT","typeT","streamT","retractT","lockT","mStart","mPage","mFill","mUrgent","mPressNow","scanM","chargeM","deployM","nodeM","typeM","streamM","retractM","lockM"].forEach(v=>{let T=v==="bed"||v==="bedTo"||v==="duck";y[v]=(...w)=>{if(T?t&&r:f())try{t[v](g(),...w)}catch{}}}),Object.assign(y,{clip(v,T){u[v]={url:T,buf:null},r&&M(v)},say(v){let T=u[v];if(!f()||!T||!T.buf)return 0;let w=i.createBufferSource();w.buffer=T.buf;let m=i.createGain();return m.gain.value=1,w.connect(m),m.connect(o),m.connect(e),w.start(g()),T.buf.duration},clipDur(v){let T=u[v];return T&&T.buf?T.buf.duration:0},level(){if(!o||!f())return 0;o.getByteTimeDomainData(l);let v=0;for(let T=0;T<l.length;T++){let w=Math.abs(l[T]-128);w>v&&(v=w)}return v/128},unlock:S,toggle:_,isOn:()=>n,ready:()=>r,wants:()=>s,alignIn(v){if(t&&r){let T=g();try{t.mAlign(T,T+v)}catch{}}}});function M(v){let T=u[v];!T||T.buf||T.loading||!i||(T.loading=!0,fetch(T.url).then(w=>w.arrayBuffer()).then(w=>new Promise((m,E)=>i.decodeAudioData(w,m,E))).then(w=>{T.buf=w}).catch(()=>{T.loading=!1}))}return["pointerdown","pointerup","mousedown","touchstart","touchend","click","keydown","wheel"].forEach(v=>window.addEventListener(v,()=>S(),{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{if(!(!i||!r)){if(document.hidden)i.suspend();else if(n){let v=i.resume();v&&v.then&&v.then(()=>{y.onResume&&y.onResume()})}}}),document.documentElement.classList.toggle("snd-on",s),s&&setTimeout(S,0),y})();function wv(){return at.on&&at.dir>0?Math.max(.05,at.t1+(1-at.e0)/Math.max(.001,at.v)-je):Math.max(.05,ci+Ac-je)}function Hh(){let i=0;try{i=rn}catch{return}i===0&&Je.alignIn(wv())}Je.onStart=()=>{document.documentElement.classList.remove("gate-on");let i=0;try{i=rn}catch{}Je.mStart(i),Hh()};Je.onResume=()=>Hh();(()=>{let i=document.getElementById("gate"),e=document.documentElement;if(!i)return;let t=()=>{Je.unlock(),e.classList.remove("gate-on")};i.addEventListener("click",n=>{n.stopPropagation(),t()}),i.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t())}),setTimeout(()=>{Je.wants()&&!Je.ready()&&(e.classList.add("gate-on"),i.focus({preventScroll:!0}))},350)})();Je.clip("n0","audio/n1.mp3");Je.clip("n1","audio/n2.mp3");var Gh=ui("#gl"),Dt=new hc({canvas:Gh,antialias:!1,powerPreference:"high-performance"}),Zn=Math.min(window.devicePixelRatio||1,zn?1.5:1.6);Dt.setPixelRatio(Zn);Dt.outputColorSpace=un;Dt.toneMapping=_s;Dt.toneMappingExposure=1;Dt.shadowMap.enabled=!0;Dt.shadowMap.type=Gi;Dt.shadowMap.autoUpdate=!1;Dt.localClippingEnabled=!0;Dt.setClearColor(0,1);var Wh=!1;Gh.addEventListener("webglcontextlost",i=>{i.preventDefault(),Wh=!0},!1);Gh.addEventListener("webglcontextrestored",()=>{Wh=!1},!1);var St=new $s;St.fog=new Wr(0,.052);var Mn=new hn(30,1,.1,200);Mn.layers.enable(1);var Rv=new pr(Dt);{let i=new $s;i.background=new Le(0);let e=(t,n,s,r)=>{let a=new st(new Rn(t,n),new An({color:new Le(1,1,1).multiplyScalar(r),side:vn}));a.position.set(...s),a.lookAt(0,1,0),i.add(a)};e(7,7,[0,9,1],2.2),e(1.2,7,[-7,2.5,2],5),e(1.2,7,[7,2.5,2],5),e(9,1.2,[0,3.5,-7],3.5),e(8,2,[0,1,8],.35),St.environment=Rv.fromScene(i,0).texture,St.environmentIntensity=.9}var Cv=new Ot(16,16,{type:Bt,samples:zn?2:4}),Qi=new xc(Dt,Cv);Qi.addPass(new _c(St,Mn));var Ki=new _r(new he(256,256),.3,.4,.93);Qi.addPass(Ki);Qi.addPass(new vc);var Ka=new xr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uAspect:{value:1},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uAspect, uFlash; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec2 d = (vUv - 0.5) * vec2(uAspect, 1.0);
      c *= mix(0.55, 1.0, smoothstep(1.1, 0.25, dot(d, d) * 1.6));
      c += (h(vUv * 1000.0 + fract(uTime) * 91.0) - 0.5) * 0.018;
      c += uFlash;
      gl_FragColor = vec4(c, 1.0);
    }`});Qi.addPass(Ka);St.add(new xa(16777215,0,.12));var mn=new gs(16777215,1.5);mn.position.set(2.5,7,4.5);mn.castShadow=!0;mn.shadow.mapSize.set(zn?512:1024,zn?512:1024);Object.assign(mn.shadow.camera,{left:-6.5,right:6.5,top:6.5,bottom:-6.5,near:1,far:24});mn.shadow.radius=zn?3.5:4.5;mn.shadow.blurSamples=8;mn.shadow.bias=-5e-4;St.add(mn);var Qa=new gs(15265535,2.4);Qa.position.set(-5,3.5,-5);St.add(Qa);var ja=new gs(16777215,2);ja.position.set(5,3,-5);St.add(ja);[mn,Qa,ja].forEach(i=>i.layers.enable(1));var Bn={k:1,base:[mn.intensity,Qa.intensity,ja.intensity,.9]};function zp(i,e,t=0,n=1.2){let s,r;We(n,a=>{s===void 0&&(s=Bn.k,r=Vt.uInk.value),Bn.k=pt(s,i,a),Vt.uInk.value=pt(r,e,a)},{delay:t})}var Tr={spec:[.4,.4,1,1,1,1],bloom:[.15,.15,.3,.3,.3,.3],thr:[1.02,1.02,.93,.93,.93,.93]};function Pv(i){Vt.uSpec.value=Tr.spec[i],Ki.strength=Tr.bloom[i],Ki.threshold=Tr.thr[i]}function Iv(i,e=1.2){let t,n,s;We(e,r=>{t===void 0&&(t=Vt.uSpec.value,n=Ki.strength,s=Ki.threshold),Vt.uSpec.value=pt(t,Tr.spec[i],r),Ki.strength=pt(n,Tr.bloom[i],r),Ki.threshold=pt(s,Tr.thr[i],r)})}function Lv(){mn.intensity=Bn.base[0]*Bn.k,Qa.intensity=Bn.base[1]*Bn.k,ja.intensity=Bn.base[2]*Bn.k,St.environmentIntensity=Bn.base[3]*(.35+.65*Bn.k),Vt.uRim.value=.16*(.4+.6*Bn.k)}var Vp=zn?512:768,bp=(()=>{let i=Vp,e=new Float32Array(i*i),t=new Float32Array(i*i);for(let n=0;n<i;n++)for(let s=0;s<i;s++){let r=s/i,a=n/i,o=_p(r*3,a*3,5,3),l=_p(r*5+7,a*5+3,4,5),c=Math.pow(1-Math.abs(Math.sin((r*4+a*1+o*3.2)*Math.PI)),34),u=Math.pow(1-Math.abs(Math.sin((a*3-r*1+l*4)*Math.PI)),60)*.75,h=Math.pow(1-Math.abs(Math.sin((r*9+a*6+l*6)*Math.PI)),110)*.5;e[n*i+s]=sn(c+u+h),t[n*i+s]=o}return{f:e,cl:t}})();function Xh(i,e=!0){let t=zh(Vp,(n,s)=>bv(n,s,(r,a)=>{let o=Math.floor(a*s)*s+Math.floor(r*s);return i(bp.f[o],bp.cl[o])}),{srgb:e});return t.wrapS=t.wrapT=us,t}var Dv=Xh(i=>{let e=i*255;return[e,e,e]},!1),Nv=Xh((i,e)=>{let n=236+(e-.5)*14-i*150;return[n,n,n+1]}),Vt={uTime:{value:0},uVeinTex:{value:Dv},uScanY:{value:-9},uScan:{value:0},uBoost:{value:1},uRim:{value:.16},uInk:{value:0},uSpec:{value:1}};function Es(i={}){let e=i.D||{uCut:{value:-1},uBase:{value:0},uHt:{value:1.1},uKeep:{value:0},uCutY:{value:0},uInkK:{value:i.ink===void 0?1:i.ink},uVeinK:{value:i.vein===void 0?1:i.vein},uGlow:{value:i.glow||0},uSpecW:{value:1}},t=new pa(i.params||{color:16777215,map:Nv,roughness:.2,clearcoat:1,clearcoatRoughness:.08,fog:!1}),n=i.frag||{};return t.onBeforeCompile=s=>{Object.assign(s.uniforms,Vt,e),s.vertexShader=`varying vec3 vWP;
`+s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=`uniform float uTime, uScanY, uScan, uBoost, uRim, uCut, uBase, uHt, uInk, uKeep, uCutY, uInkK, uVeinK, uGlow, uSpec, uSpecW; uniform sampler2D uVeinTex; varying vec3 vWP;
      float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
      `+s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      float hN = (vWP.y - uBase) / uHt + (n3(vWP * 26.0) - 0.5) * 0.14;
      if (uCut > -0.5 && hN < uCut) discard;
      float cutD = vWP.y - uCutY;
      if (uKeep > 0.5 && cutD < 0.0) discard;
      if (uKeep < -0.5 && cutD > 0.0) discard;`).replace("#include <map_fragment>",`#include <map_fragment>
      diffuseColor.rgb *= 1.0 - texture2D(uVeinTex, vMapUv).r * uInk * uInkK;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      ${n.rough||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      ${n.normal||""}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      { float gs = mix(1.0, uSpec, uSpecW), gi = mix(1.0, 0.3 + 0.7 * uSpec, uSpecW);
        reflectedLight.directSpecular *= gs; reflectedLight.indirectSpecular *= gi;
        #ifdef USE_CLEARCOAT
        clearcoatSpecularDirect *= gs; clearcoatSpecularIndirect *= gi;
        #endif
      }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float vein = texture2D(uVeinTex, vMapUv).r;
      float scan = exp(-pow((vWP.y - uScanY) / 0.03, 2.0)) * uScan;
      float trail = exp(-max(0.0, uScanY - vWP.y) * 7.0) * step(vWP.y, uScanY) * uScan;
      float wave = pow(0.5 + 0.5 * sin(vWP.y * 6.0 - uTime * 1.4), 12.0);
      totalEmissiveRadiance += vec3(0.92, 0.95, 1.0) * vein * (0.02 + wave * 0.22 * (1.0 - uInk) + scan * 3.0 + trail * 0.5) * uBoost * uVeinK;
      totalEmissiveRadiance += vec3(0.92, 0.95, 1.0) * vein * uGlow * (0.55 + 0.45 * sin(uTime * 1.2 + vWP.y * 2.5));
      totalEmissiveRadiance += vec3(0.9, 0.94, 1.0) * scan * 0.45;
      float fres = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
      totalEmissiveRadiance += vec3(0.85, 0.9, 1.0) * fres * uRim;
      if (uCut > -0.5) { float de = hN - uCut; totalEmissiveRadiance += vec3(1.0) * (smoothstep(0.045, 0.0, de) * 5.0 + smoothstep(0.16, 0.0, de) * vein * 2.0); }
      if (abs(uKeep) > 0.5) { float ce = abs(cutD); totalEmissiveRadiance += vec3(1.0) * smoothstep(0.012, 0.0, ce) * 1.6 + vec3(0.9, 0.95, 1.0) * smoothstep(0.1, 0.0, ce) * (0.08 + vein * 0.5) * uVeinK; }
      ${n.emis||""}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
      ${n.end||""}`)},t.customProgramCacheKey=()=>"stone3"+(i.key||""),t.userData.D=e,t}var qt=i=>new H(i.charCodeAt(0)-97-3,0,3-(+i[1]-1)),_t={},Uv=new fa(.033,16,12);function qa(i){let e=[{geo:kc(i),x:0,y:0,z:0}];if(i==="N"&&e.push({geo:kh,x:0,y:.2,z:0}),i==="Q")for(let t=0;t<10;t++){let n=t*Math.PI/5;e.push({geo:Uv,x:Math.cos(n)*.226,y:1.048,z:Math.sin(n)*.226})}return i==="K"&&(e.push({geo:new Fn(.078,.28,.078),x:0,y:1.32,z:0}),e.push({geo:new Fn(.23,.074,.078),x:0,y:1.34,z:0})),e}function Fv(i){let e=Es(),t=new Jt,n=qa(i);n.forEach(a=>{let o=new st(a.geo,e);o.position.set(a.x,a.y,a.z),o.castShadow=!0,o.receiveShadow=!0,t.add(o)});let s={N:1.06,Q:1.21,K:1.48}[i];e.userData.D.uHt.value=s;let r=new Zr(new na(kc(i),16),new fs({color:16777215,transparent:!0,opacity:0,blending:jt,depthWrite:!1,fog:!1}));r.scale.setScalar(1.004),t.add(r),t.visible=!1,St.add(t),_t[i]={type:i,g:t,mat:e,ht:s,parts:n,edges:r,sq:"d4"}}var Ji="N",Dc=null,kp=()=>_t.N.g,Cs=()=>_t[Ji],As=new za(new er(8,64),{textureWidth:zn?384:768,textureHeight:zn?384:768,clipBias:.003,color:0,multisample:0,shader:{name:"GlassFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uC:{value:new he}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec2 vW;
      void main(){ vUv = textureMatrix * vec4(position, 1.0); vW = (modelMatrix * vec4(position, 1.0)).xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 color; uniform sampler2D tDiffuse; uniform vec2 uC; varying vec4 vUv; varying vec2 vW;
      void main(){
        vec3 r = texture2DProj(tDiffuse, vUv).rgb;
        float d = length(vW - uC);
        float fade = smoothstep(3.2, 0.2, d);
        gl_FragColor = vec4(r * 0.13 * fade, smoothstep(8.0, 5.5, length(vW)));
      }`}});As.material.transparent=!0;As.rotation.x=-Math.PI/2;St.add(As);{let i=As.getReflectionCamera.bind(As);As.getReflectionCamera=e=>{let t=i(e);return t.layers.set(0),t}}var Hc=new st(new er(7,48),new da({opacity:.55,transparent:!0,depthWrite:!1}));Hc.rotation.x=-Math.PI/2;Hc.position.y=.002;Hc.receiveShadow=!0;St.add(Hc);var qh=[];function Yh(i,{ticks:e=72,major:t=8,width:n=.014}={}){let s={uProg:{value:0},uOp:{value:0},uTime:{value:0},uR:{value:i},uTicks:{value:e},uMajor:{value:t},uW:{value:n}},r=new sr(i*.86,i*1.16,160,1);r.rotateX(-Math.PI/2);let a=new At({uniforms:s,transparent:!0,depthWrite:!1,blending:jt,side:vn,fog:!1,vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uProg, uOp, uTime, uR, uTicks, uMajor, uW; varying vec3 vL;
      void main(){
        float a = atan(vL.z, vL.x) / 6.2831853 + 0.5; if (a > uProg) discard;
        float r = length(vL.xz) / uR;
        float line = smoothstep(uW, 0.0, abs(r - 1.0));
        float tick = step(0.82, fract(a * uTicks)) * step(1.035, r) * step(r, 1.075);
        float maj = step(0.93, fract(a * uMajor)) * step(1.02, r) * step(r, 1.12);
        float head = smoothstep(0.025, 0.0, uProg - a) * line * 2.0 * step(uProg, 0.999);
        float c = line + tick * 0.6 + maj + head;
        gl_FragColor = vec4(vec3(1.0) * c * 1.15, uOp * clamp(c, 0.0, 1.0) * 0.85);
      }`}),o=new st(r,a);o.renderOrder=5,o.visible=!1;let l={mesh:o,u:s,show(c=0,u=.8){Ve(c,()=>{o.visible=!0,s.uOp.value=1,s.uProg.value=0}),We(u,h=>{s.uProg.value=h},{delay:c,ease:Jn})},hide(c=.35){let u=s.uOp.value;We(c,h=>{s.uOp.value=u*(1-h)},{done:()=>{o.visible=!1}})}};return qh.push(l),l}function Ov(i){let e={uOp:{value:0},uTime:{value:0},uH:{value:i}},t=new ta(.0045,.0045,i,6,1,!0);t.translate(0,i/2-.15,0);let n=new At({uniforms:e,transparent:!0,depthWrite:!1,blending:jt,fog:!1,vertexShader:"varying float vY; void main(){ vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uOp, uTime, uH; varying float vY;
      void main(){
        float d = step(0.5, fract(vY * 9.0 - uTime * 0.6));
        float fade = smoothstep(-0.15, 0.25, vY) * (1.0 - smoothstep(uH - 0.7, uH - 0.15, vY));
        gl_FragColor = vec4(vec3(1.0), uOp * d * fade * 0.8);
      }`}),s=new st(t,n);s.visible=!1;let r={mesh:s,u:e,show(a=0,o=.9){Ve(a,()=>{s.visible=!0,e.uOp.value=1}),We(o,l=>{s.scale.y=Math.max(.001,l)},{delay:a,ease:$n})},hide(a=.3){We(a,o=>{e.uOp.value=1-o},{done:()=>{s.visible=!1}})}};return qh.push(r),r}var Za=Yh(.62,{ticks:120,major:12,width:.01});Za.mesh.position.y=.004;St.add(Za.mesh);var dn=Yh(.46,{ticks:1,major:1,width:.03});St.add(dn.mesh);function Bv(i=0,e=2.2){Ve(i,()=>Je.scanM(e,ji)),Ve(i,()=>{dn.mesh.visible=!0,dn.u.uProg.value=1,dn.u.uOp.value=0,Vt.uScan.value=1}),We(e,t=>{let n=Cs(),s=pt(-.05,n.ht+.12,t);Vt.uScanY.value=s,dn.mesh.position.set(n.g.position.x,s,n.g.position.z);let r=1-.45*sn((s-.2)/(n.ht-.15));dn.mesh.scale.setScalar(r);let a=Math.sin(Math.PI*t);dn.u.uOp.value=a*.9,Vt.uScan.value=a},{delay:i,ease:Bh,done:()=>{dn.mesh.visible=!1,Vt.uScan.value=0,Vt.uScanY.value=-9}})}var pn={},xh=["P","Q","N","B","R","K"],Ac=2.2,Nc=1.2,ji="P",ci=4.2,at={on:!1,from:"P",to:"P",e0:0,t1:0,v:0,dir:1,then:null},zv=zh(4,(i,e)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e)});function Vv(i){return new At({side:Gt,fog:!1,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:4,uniforms:{uKeep:i.uKeep,uCutY:i.uCutY},vertexShader:"varying vec3 vWP; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vWP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uKeep, uCutY; varying vec3 vWP;
      void main(){
        float cutD = vWP.y - uCutY;
        if (uKeep > 0.5 && cutD < 0.0) discard;
        if (uKeep < -0.5 && cutD > 0.0) discard;
        if (abs(uKeep) < 0.5) discard;
        float s = (vWP.x + vWP.y + vWP.z) * 34.0;
        float hatch = smoothstep(0.86, 0.95, fract(s)) * (1.0 - smoothstep(0.95, 1.0, fract(s)));
        float edge = smoothstep(0.05, 0.0, abs(cutD));
        gl_FragColor = vec4(vec3(0.045) + vec3(0.32) * hatch + vec3(0.12) * edge, 1.0);
      }`})}function Ih(i,e,t,n,s,r={}){let a=[];e.traverse(o=>{o.isMesh&&o.castShadow&&a.push(o)}),pn[i]=Object.assign({key:i,g:e,Ds:t,caps:n,ht:s,casters:a,sh:1,setKeep(o){t.forEach(l=>{l.uKeep.value=o}),n.forEach(l=>{l.visible=o!==0})},setCut(o){t.forEach(l=>{l.uCutY.value=o})},cast(o){a.forEach(l=>{l.castShadow=o})},sync(o){e.position.copy(o.position),e.rotation.y=o.rotation.y},fade(){},arrive(){}},r)}function Hp(i,e,t){let n=Vv(t),s=[];return e.forEach(r=>{let a=new st(r.geometry,n);a.position.copy(r.position),a.rotation.copy(r.rotation),a.scale.copy(r.scale),a.visible=!1,i.add(a),s.push(a)}),s}function _h(i,e,t,n,s,r){let a=new Jt,o=e.map(c=>{let u=new st(c.geo,t);return u.position.set(c.x||0,c.y||0,c.z||0),c.ry&&(u.rotation.y=c.ry),u.castShadow=!0,u.receiveShadow=!0,a.add(u),u}),l=Hp(a,o,t.userData.D);a.scale.setScalar(n),a.visible=!1,St.add(a),Ih(i,a,[t.userData.D],l,s*n,r)}function kv(){{let i=_t.N,e=new Jt,t=i.g.children.filter(s=>s.isMesh),n=Hp(e,t,i.mat.userData.D);St.add(e),Ih("N",i.g,[i.mat.userData.D],n,i.ht,{sync(s){e.position.copy(s.position),e.rotation.copy(s.rotation),e.scale.copy(s.scale)}})}{let i=Es(),e=qa("R"),t=Math.PI/6*.56,n=new nr;n.absarc(0,0,.274,-t,t,!1),n.absarc(0,0,.212,t,-t,!0);let s=new ha(n,{depth:.08,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:10});s.rotateX(-Math.PI/2),s.translate(0,.006,0);for(let r=0;r<6;r++)e.push({geo:s,x:0,y:.806,z:0,ry:r*Math.PI/3});_h("R",e,i,1.12,.9)}{let i=$p(),e=()=>Es({key:"onyx",ink:0,glow:.18,params:{color:16777215,map:i,roughness:.32,clearcoat:.55,clearcoatRoughness:.24,envMapIntensity:1.1,fog:!1}}),t=r=>()=>{let a=r.userData.D;We(2.4,o=>{a.uGlow.value=pt(.5,.18,o)},{ease:$n})},n=e(),s=e();_h("Q",qa("Q"),n,.95,1.2,{arrive:t(n)}),_h("K",qa("K"),s,.86,1.48,{arrive:t(s)})}{let i=[[0,0],[.37,0],[.386,.03],[.36,.06],[.35,.1],[.3,.126]],e=(t,n,s,r)=>{let a=new ps(Vh(n),12),o={uCut:{value:-1},uBase:{value:0},uHt:{value:1},uKeep:{value:0},uCutY:{value:0},uInkK:{value:0},uVeinK:{value:0},uGlow:{value:0},uSpecW:{value:.35}},l=f=>Es({key:"crystal"+f,D:o,params:{color:789776,map:zv,metalness:0,roughness:.2,ior:1.9,specularIntensity:.55,envMapIntensity:f===Gt?.55:2.2,flatShading:!0,transparent:!0,depthWrite:!1,side:f,fog:!1,blending:Ml,blendSrc:Ma,blendDst:lr,blendSrcAlpha:Ma,blendDstAlpha:lr},frag:{emis:"totalEmissiveRadiance += vec3(0.9, 0.94, 1.0) * fres * 0.25;",end:"gl_FragColor.a = clamp(0.16 + fres * 0.5, 0.0, 0.8);"}}),c=new Jt,u=new st(a,l(Gt)),h=new st(a,l(ni));u.renderOrder=6,h.renderOrder=7,h.castShadow=!0,c.add(u,h),c.scale.setScalar(s),c.visible=!1,St.add(c),Ih(t,c,[o],[],r*s,{sh:.45})};e("P",[...i,[.24,.165],[.165,.28],[.13,.405],[.205,.424],[.205,.446],[.13,.463],[.1,.485],...Xa(0,.612,.142,-52*li,90*li,8)],1.24,.754),e("B",[...i,[.242,.165],[.158,.3],[.114,.52],[.112,.556],[.2,.572],[.2,.6],[.112,.616],[.092,.636],[.15,.712],[.164,.77],[.142,.872],[.072,.966],[.034,.996],...Xa(0,1.036,.05,-48*li,90*li,4)],1.03,1.086)}}var Gc=()=>sn(at.e0+(je-at.t1)*at.v);function vh(i,e){let t=Gc();at.e0=t,at.t1=je,at.dir=i,at.v=i*Math.max(i>0?1-t:t,.001)/Math.max(.05,e)}function Uc(i,e,t=!1){t||Je.scanM(e,i);let n=pn[ji],s=pn[i];Object.assign(at,{on:!0,from:ji,to:i,e0:0,t1:je,dir:1,v:1/e,then:null}),s.g.visible=!0,s.sync(_t.N.g),n.setKeep(1),s.setKeep(-1),n.setCut(-.05),s.setCut(-.05),dn.mesh.visible=!0,dn.u.uProg.value=1,dn.u.uOp.value=0}function Hv(){let i=_t.N.g;for(let l in pn)pn[l].sync(i);if(!at.on)return;let e=Gc(),t=pn[at.from],n=pn[at.to],s=Math.max(t.ht,n.ht)+.1,r=pt(-.05,s,Bh(e));t.setCut(r),n.setCut(r),t.fade(1-e),n.fade(e);let a=Math.sin(Math.PI*sn(e*1.15));Vt.uScanY.value=r,Vt.uScan.value=a*.7,mn.shadow.intensity=Math.abs(Math.cos(Math.PI*e))*(e<.5?t.sh:n.sh);let o=e>=.5;t.cast(!o),n.cast(o),dn.mesh.position.set(i.position.x,r,i.position.z),dn.mesh.scale.setScalar(1-.42*sn((r-.2)/(s-.25))),dn.u.uOp.value=a*.75,(at.dir>0&&e>=1||at.dir<0&&e<=0)&&Gv(at.dir>0?at.to:at.from)}function Gv(i){let e=pn[at.from],t=pn[at.to],n=i===at.to?e:t,s=pn[i];e.setKeep(0),t.setKeep(0),n.g.visible=!1,n.fade(0),s.fade(1),n.cast(!1),s.cast(!0),mn.shadow.intensity=s.sh,ji=i,at.on=!1,dn.mesh.visible=!1,Vt.uScan.value=0,Vt.uScanY.value=-9,i===at.to&&s.arrive();let r=at.then;at.then=null,r&&r()}function Wv(){let i=xh[(xh.indexOf(ji)+1)%xh.length],e=ci;Uc(i,Ac),je-e<.5?(at.t1=e,ci=e+Ac+Nc):ci=je+Ac+Nc}function Xv(){if(!at.on)return ji==="N"?(mn.shadow.intensity=1,0):(Uc("N",.85,!0),.85);let i=Gc();if(at.to==="N"){let t=Math.max(.12,(1-i)*.55);return vh(1,t),t}if(at.from==="N"){let t=Math.max(.12,i*.55);return vh(-1,t),t}let e=Math.max(.12,(1-i)*.35);return vh(1,e),at.then=()=>Uc("N",.75,!0),e+.75}var ws=new Jt;St.add(ws);var bn=new Jt;bn.position.set(0,1.25,-16.5);bn.rotation.x=.95;bn.rotation.y=0;bn.scale.setScalar(1.08);ws.add(bn);var Ts=i=>new H(i.charCodeAt(0)-97-3.5,0,3.5-(+i[1]-1));function Gp(i,e){let t=e/8.6,n=(e-8*t)/2;i.fillStyle="#050506",i.fillRect(0,0,e,e);for(let s=0;s<8;s++)for(let r=0;r<8;r++)i.fillStyle=(s+r)%2?"#2a2b2f":"#111113",i.fillRect(n+r*t,n+s*t,t,t);i.strokeStyle="rgba(255,255,255,.3)",i.lineWidth=1.5;for(let s=0;s<=8;s++)i.beginPath(),i.moveTo(n+s*t,n),i.lineTo(n+s*t,n+8*t),i.stroke(),i.beginPath(),i.moveTo(n,n+s*t),i.lineTo(n+8*t,n+s*t),i.stroke();i.strokeStyle="rgba(255,255,255,.4)",i.lineWidth=2,i.strokeRect(n-6,n-6,8*t+12,8*t+12),i.fillStyle="rgba(255,255,255,.35)",i.font=`500 ${Math.round(t*.16)}px Inter, sans-serif`,i.textAlign="center",i.textBaseline="middle";for(let s=0;s<8;s++)i.fillText("abcdefgh"[s],n+(s+.5)*t,e-n/2),i.fillText(String(8-s),n/2,n+(s+.5)*t)}var Fc=zh(1024,Gp),Ja=new st(new Rn(8.6,8.6),new zi({map:Fc,roughness:.4,metalness:.3,emissive:16777215,emissiveMap:Fc,emissiveIntensity:.45}));Ja.rotation.x=-Math.PI/2;Ja.layers.set(1);bn.add(Ja);var Wp=new zi({color:12172482,roughness:.28,metalness:.65}),Xp=new zi({color:2303015,roughness:.3,metalness:.55}),Kh=null,yh={},wc=[];function qp(i,e){let t=new Jt,n=e?Wp:Xp;yh[i]||(yh[i]=new ps(Vh(Bp[i]),28));let s=new st(yh[i],n);if(s.layers.set(1),t.add(s),i==="N"){let r=new st(Kh,n);r.position.y=.2,r.layers.set(1),t.add(r),t.rotation.y=e?-Math.PI/2:Math.PI/2}if(i==="K"){let r=new st(new Fn(.075,.26,.075),n);r.position.y=1.31,r.layers.set(1),t.add(r);let a=new st(new Fn(.22,.07,.075),n);a.position.y=1.33,a.layers.set(1),t.add(a)}return t}var Mr={};"RNBQKBNR".split("").forEach((i,e)=>{let t="abcdefgh"[e];Mr[t+"1"]="w"+i,Mr[t+"8"]="b"+i,Mr[t+"2"]="wP",Mr[t+"7"]="bP"});var ai={};function Yp(i){wc.forEach(t=>bn.remove(t.g)),wc.length=0,ai={};let e=0;for(let t in Mr){let n=Mr[t],s=qp(n[1],n[0]==="w");s.position.copy(Ts(t)),bn.add(s);let r={g:s,sq:t,alive:!0};wc.push(r),ai[t]=r,i&&(s.scale.setScalar(.001),We(.6,a=>s.scale.setScalar(Math.max(.001,a)),{delay:.02*e++,ease:yv}))}}var qv=()=>new An({color:16777215,transparent:!0,opacity:0,blending:jt,depthWrite:!1,fog:!1});function Tp(i,e){let t=Ts(i),n=Ts(e),s=n.clone().sub(t),r=s.length(),a=qv(),o=new Rn(r,.035);o.translate(r/2,0,0),o.rotateX(-Math.PI/2);let l=new st(o,a);l.position.set(t.x,.02,t.z),l.rotation.y=-Math.atan2(s.z,s.x),l.layers.set(1),bn.add(l);let c=new Jr(new Pt().setFromPoints([new H(-.46,0,-.46),new H(.46,0,-.46),new H(.46,0,.46),new H(-.46,0,.46)]),new fs({color:16777215,transparent:!0,opacity:0,fog:!1}));c.position.set(n.x,.02,n.z),c.layers.set(1),bn.add(c),We(1.6,(u,h)=>{let f=h<.25?h/.25:1-(h-.25)/.75;a.opacity=.55*f,c.material.opacity=.7*f,l.scale.x=Math.min(1,h*4)},{ease:u=>u,done:()=>{bn.remove(l),bn.remove(c),o.dispose(),a.dispose(),c.geometry.dispose(),c.material.dispose()}})}var Mh=0,Lh=2.5,Dh=!1;function Yv(){if(Mh>=gh.length){Dh=!0,wc.forEach((h,f)=>{h.alive&&We(.5,d=>h.g.scale.setScalar(Math.max(.001,1-d)),{delay:2.4+f*.015,ease:Ar})}),Ve(3.6,()=>{Yp(!0),Mh=0,Dh=!1,Lh=je+2.2});return}let[i,e,t,n,s,r]=gh[Mh++],a=ai[i];if(!a)return;let o=t?ai[t]:null;o&&(o.alive=!1,delete ai[t],We(.45,h=>o.g.scale.setScalar(Math.max(.001,1-h)),{delay:.3,done:()=>{o.g.visible=!1}})),delete ai[i],ai[e]=a,a.sq=e;let l=Ts(i),c=Ts(e),u=a.g.children.length>1&&Math.abs(l.x-c.x)+Math.abs(l.z-c.z)===3?.6:.08;if(We(.6,(h,f)=>{a.g.position.lerpVectors(l,c,h),a.g.position.y=Math.sin(Math.PI*f)*u},{ease:Jn}),Tp(i,e),n){let h=ai[n];delete ai[n],ai[s]=h;let f=Ts(n),d=Ts(s);We(.6,x=>h.g.position.lerpVectors(f,d,x),{delay:.1}),Tp(n,s)}r&&Ve(.6,()=>{bn.remove(a.g);let h=qp(r,!(c.z>0));h.position.copy(c),bn.add(h),a.g=h})}var Yi={v:0};function Kv(){ws.visible=Yi.v>.004,!Dh&&je>=Lh&&(Yv(),Lh=je+1.05),Wp.color.setScalar(.72*Yi.v),Xp.color.setScalar(.14*Yi.v),Ja.material.color.setScalar(Yi.v),Ja.material.emissiveIntensity=.45*Yi.v}var Ya=[0,.095,.215,.45,.66,.82,1.3],Sh=new H(0,1,0),xt={grp:null,frags:[],rings:[],axis:null,ground:null,amt:0},Ha=new H,Ep=new H;function Ap(i,e){let t=i.attributes.position.array,n=i.attributes.normal.array,s=i.attributes.uv.array,r=[],a=[],o=[];for(let c=0;c<t.length/9;c++){let u=!1;for(let h=0;h<3&&!u;h++){let f=c*3+h;u=e(t[f*3],t[f*3+1],t[f*3+2])}if(u)for(let h=0;h<3;h++){let f=c*3+h;r.push(t[f*3],t[f*3+1],t[f*3+2]),a.push(n[f*3],n[f*3+1],n[f*3+2]),o.push(s[f*2],s[f*2+1])}}if(!r.length)return null;let l=new Pt;return l.setAttribute("position",new lt(r,3)),l.setAttribute("normal",new lt(a,3)),l.setAttribute("uv",new lt(o,2)),l}function Zv(i){return new At({side:Gt,clipping:!0,clippingPlanes:i,fog:!1,uniforms:{uTime:Vt.uTime,uGlow:{value:0}},vertexShader:`#include <clipping_planes_pars_vertex>
      varying vec3 vWP;
      void main(){ vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * mvPosition;
      #include <clipping_planes_vertex>
      }`,fragmentShader:`#include <clipping_planes_pars_fragment>
      uniform float uTime, uGlow; varying vec3 vWP;
      void main(){
      #include <clipping_planes_fragment>
        float s = (vWP.x + vWP.y + vWP.z) * 34.0;
        float hatch = smoothstep(0.86, 0.95, fract(s)) * (1.0 - smoothstep(0.95, 1.0, fract(s)));
        float pulse = 0.5 + 0.5 * sin(uTime * 2.0 - vWP.y * 9.0);
        vec3 c = vec3(0.04) + vec3(0.6) * hatch * (0.55 + 0.45 * pulse) * uGlow;
        gl_FragColor = vec4(c, 1.0);
      }`})}var Zh=[];function Jv(){let i=new Jt;i.visible=!1,St.add(i);let e=kc("N").toNonIndexed(),t=kh.clone();t.translate(0,.2,0);for(let n=0;n<Ya.length-1;n++){for(let r=0;r<4;r++){let a=Ya[n],o=Ya[n+1],l=r*Math.PI/2+.35,c=l+Math.PI/2,u=.02,h=new H(-Math.sin(l),0,Math.cos(l)),f=new H(Math.sin(c),0,-Math.cos(c)),d=(E,B,C)=>B>=a-u&&B<=o+u&&h.x*E+h.z*C>=-u&&f.x*E+f.z*C>=-u,x=[];if(a<.22){let E=Ap(e,d);E&&x.push(E)}if(o>.2){let E=Ap(t,d);E&&x.push(E)}if(!x.length)continue;let S=new Zt(new H(0,1,0),0),_=new Zt(new H(0,-1,0),0),g=new Zt,y=new Zt,M=[S,_,g,y],v=Es();v.clippingPlanes=M,v.clipShadows=!0;let T=Zv(M);Zh.push(T);let w=new Jt;x.forEach(E=>{let B=new st(E,v);B.castShadow=!0,B.receiveShadow=!0,w.add(B,new st(E,T))}),i.add(w);let m=(l+c)/2;xt.frags.push({f:w,lo:S,hi:_,pA:g,pB:y,nA:h,nB:f,y0:a-8e-4,y1:o+8e-4,L:n,dx:Math.cos(m),dz:Math.sin(m),e:0,rr:bc(-.5,.5),drift:0,sgn:Op()<.5?-1:1})}let s=Yh(.46+n%2*.05);i.add(s.mesh),xt.rings.push(s)}xt.axis=Ov(2.55),i.add(xt.axis.mesh),xt.grp=i}var Nh=(i,e)=>(.04+i*.17)*e,Kp=(i,e)=>(.13+i*.012)*e,Zp=i=>(Ya[i]+Math.min(Ya[i+1],1.06))/2;function $v(i){if(!xt.grp||!xt.grp.visible)return;let e=Dc.position;xt.grp.position.copy(e),xt.grp.rotation.y=Dc.rotation.y;for(let n of xt.frags){let s=xt.amt*Math.sin(je*1.1+n.L*.8+n.dx*2)*.018;xt.amt>.6&&!Lc&&(n.drift+=i*.08*n.sgn);let r=Kp(n.L,n.e);n.f.position.set(n.dx*r,Nh(n.L,n.e)+s,n.dz*r),n.f.rotation.y=n.rr*n.e+n.drift;let a=xt.grp.rotation.y+n.f.rotation.y;Ha.copy(n.f.position).applyAxisAngle(Sh,xt.grp.rotation.y).add(e),n.lo.constant=-(Ha.y+n.y0),n.hi.constant=Ha.y+n.y1,n.pA.setFromNormalAndCoplanarPoint(Ep.copy(n.nA).applyAxisAngle(Sh,a),Ha),n.pB.setFromNormalAndCoplanarPoint(Ep.copy(n.nB).applyAxisAngle(Sh,a),Ha)}let t=xt.frags[xt.frags.length-1].e;xt.rings.forEach((n,s)=>{n.mesh.position.y=Nh(s,Math.min(1,t))+Zp(s),n.mesh.rotation.y=-xt.grp.rotation.y+je*.08*(s%2?1:-1)})}var Jh=[{L:5,name:"Pirc Defence",moves:"1.e4 d6 2.d4 Nf6 3.Nc3 g6"},{L:4,name:"Byrne Variation",moves:"4.Bg5"},{L:3,name:"Classical Variation",moves:"4.Nf3 Bg7 5.Be2 O-O 6.O-O"},{L:2,name:"Parma Defence",moves:"6\u2026Bg4"},{L:1,name:"Meeting the Parma",moves:"7.h3 Bxf3 8.Bxf3"},{L:0,name:"Schlechter Variation",moves:"5.h3"}],Jp=ui("#lines"),Qv=ui("#callouts"),yc="http://www.w3.org/2000/svg";Jh.forEach((i,e)=>{let t=document.createElementNS(yc,"g"),n=document.createElementNS(yc,"polyline");n.setAttribute("pathLength","1"),n.setAttribute("fill","none");let s=document.createElementNS(yc,"circle");s.setAttribute("r","3");let r=document.createElementNS(yc,"circle");r.setAttribute("r","7"),r.setAttribute("class","halo"),t.append(n,r,s),t.style.setProperty("--i",e),Jp.appendChild(t);let a=document.createElement("div");a.className="co",a.style.setProperty("--i",e),a.innerHTML=`<b>${i.name}</b><span>${i.moves}</span>`,Qv.appendChild(a),Object.assign(i,{g:t,line:n,dot:s,halo:r,el:a})});var bh=new H,wp=new H,Sn=0,Ci=0,Sr=1;function jv(){if(!document.documentElement.classList.contains("ex"))return;let i=Sr<.95,e=i?46:54;wp.setFromMatrixColumn(Mn.matrixWorld,0).setY(0).normalize();let t=Sn/2-by.ox*Sn,n=Math.min(1,xt.frags[xt.frags.length-1].e),s=Jh.map((a,o)=>{let l=i||o%2?1:-1,c=Nh(a.L,n)+Zp(a.L),u=(a.L<2?.36:.2)+Kp(a.L,1)+.02;return bh.copy(Dc.position).addScaledVector(wp,l*u).setY(c).project(Mn),{c:a,side:l,ax:(bh.x*.5+.5)*Sn,ay:(-bh.y*.5+.5)*Ci}});[-1,1].forEach(a=>{let o=s.filter(l=>l.side===a).sort((l,c)=>l.ay-c.ay);o.forEach((l,c)=>{l.ly=c===0?l.ay:Math.max(l.ay,o[c-1].ly+e)})});let r=i?Math.max(...s.map(a=>a.ax))+30:0;s.forEach(a=>{let{c:o,side:l}=a;a.col=i?Math.max(r,Sn*.5):t+l*Math.min(Sn*.2,330);let c=i?Math.max(90,Math.round((Sn-a.col-12)/8)*8)+"px":"";o.mw!==c&&(o.el.style.maxWidth=c,o.mw=c,o.sz=null);let u=l<0?"right":"left";o.ta!==u&&(o.el.style.textAlign=u,o.ta=u)}),s.forEach(({c:a})=>{a.sz||(a.sz=[a.el.offsetWidth,a.el.offsetHeight])}),s.forEach(({c:a,side:o,ax:l,ay:c,ly:u,col:h})=>{let f=i?h-8:h-o*10,d=f-o*16;a.line.setAttribute("points",`${l},${c} ${d},${u} ${f},${u}`),a.dot.setAttribute("cx",l),a.dot.setAttribute("cy",c),a.halo.setAttribute("cx",l),a.halo.setAttribute("cy",c),a.el.style.transform=`translate3d(${o>0?h:h-a.sz[0]}px, ${u-a.sz[1]/2}px, 0)`})}var zt=(()=>{let i={uOp:{value:0},uReveal:{value:0},uC:{value:new he},uTime:{value:0},uPulse:{value:-9},uPulseK:{value:0},uPC:{value:new he}},e=new Rn(8,8);e.rotateX(-Math.PI/2);let t=new At({uniforms:i,transparent:!0,depthWrite:!1,blending:jt,fog:!1,vertexShader:"varying vec3 vL; varying vec3 vW; void main(){ vL = position; vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uOp, uReveal, uTime, uPulse, uPulseK; uniform vec2 uC, uPC; varying vec3 vL; varying vec3 vW;
      void main(){
        vec2 b = vL.xz + 4.0;
        vec2 gv = abs(fract(b - 0.5) - 0.5) / fwidth(b);
        float line = 1.0 - min(min(gv.x, gv.y), 1.0);
        vec2 eb = min(b, 8.0 - b);
        float border = 1.0 - smoothstep(0.0, 0.03, min(eb.x, eb.y));
        float chk = mod(floor(b.x) + floor(b.y), 2.0);
        float d = length(vW.xz - uC);
        float vis = smoothstep(uReveal, uReveal - 0.8, d);
        float front = smoothstep(0.45, 0.0, abs(d - uReveal)) * step(0.05, uReveal) * (1.0 - smoothstep(9.0, 11.0, uReveal));
        float pr = smoothstep(0.55, 0.0, abs(length(vW.xz - uPC) - uPulse)) * uPulseK;
        float c = line * 0.22 + border * 0.5 + chk * 0.012 + front * (line * 2.0 + 0.06) + pr * (line * 2.6 + border * 1.5 + 0.05);
        gl_FragColor = vec4(vec3(c), uOp * clamp(vis + front, 0.0, 1.0));
      }`}),n=new st(e,t);return n.position.set(.5,.004,-.5),n.renderOrder=2,n.visible=!1,St.add(n),{mesh:n,u:i,on:!1}})();function Uh(i,e=0,t=1.6){i!==zt.on&&(zt.on=i,i?(Ve(e,()=>{zt.mesh.visible=!0,zt.u.uOp.value=1;let n=Cs().g.position;zt.u.uC.value.set(n.x,n.z)}),We(t,n=>{zt.u.uReveal.value=n*11},{delay:e,ease:$n})):We(.6,n=>{zt.u.uOp.value=1-n},{delay:e,done:()=>{zt.mesh.visible=!1,zt.u.uReveal.value=0}}))}var Rs=(()=>{let i=new Rn(.96,.96);i.rotateX(-Math.PI/2);let e=new An({color:16777215,transparent:!0,blending:jt,depthWrite:!1,fog:!1}),t=new hs(i,e,64),n=new Float32Array(64),s=new Le,r=new ht;for(let a=0;a<64;a++){let o=a%8,l=Math.floor(a/8);r.makeTranslation(o-3,.006,3-l),t.setMatrixAt(a,r),t.setColorAt(a,s.setScalar(0))}return t.renderOrder=3,St.add(t),{pulse(a,o=1){let l=(+a[1]-1)*8+(a.charCodeAt(0)-97);l>=0&&l<64&&(n[l]=Math.max(n[l],o))},update(a){let o=!1;for(let l=0;l<64;l++){if(n[l]<.001){if(n[l]===0)continue;n[l]=0}else n[l]*=Math.exp(-a*2.2);t.setColorAt(l,s.setScalar(n[l]*.28)),o=!0}o&&(t.instanceColor.needsUpdate=!0)}}})(),ey=[.16,.5,1],Rc=[1,.22,.2],Kn=(()=>{let i=new Rn(.94,.94);i.rotateX(-Math.PI/2);let e=new Float32Array(192),t=new Float32Array(64),n=new Float32Array(64),s=new Float32Array(64);i.setAttribute("aCol",new bi(e,3)),i.setAttribute("aK",new bi(t,1)),i.setAttribute("aPulse",new bi(n,1));let r=new At({uniforms:{uTime:Vt.uTime,uFade:{value:1}},transparent:!0,depthWrite:!1,blending:jt,fog:!1,vertexShader:`attribute vec3 aCol; attribute float aK, aPulse; uniform float uTime, uFade; varying vec3 vC; varying vec2 vUv; varying float vK;
      void main(){ vUv = uv; vC = aCol; vK = aK * uFade * (1.0 + aPulse * 0.55 * sin(uTime * 4.2));
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vC; varying vec2 vUv; varying float vK;
      void main(){
        vec2 d = abs(vUv - 0.5); float e = max(d.x, d.y);
        float edge = smoothstep(0.41, 0.48, e) * (1.0 - smoothstep(0.485, 0.5, e));
        float fill = 0.16 + 0.34 * smoothstep(0.05, 0.47, e);
        gl_FragColor = vec4(vC * (fill + edge * 1.4) * vK, 1.0);
      }`}),a=new hs(i,r,64),o=new ht;for(let d=0;d<64;d++){let x=d%8,S=Math.floor(d/8);o.makeTranslation(x-3,.008,3-S),a.setMatrixAt(d,o)}a.renderOrder=3,a.visible=!1,a.frustumCulled=!1,St.add(a);let l=d=>(+d[1]-1)*8+(d.charCodeAt(0)-97),c=r.uniforms.uFade,u=0,h=!1,f=()=>{t.fill(0),s.fill(0),c.value=1,h=!1,a.visible=!1,i.attributes.aK.needsUpdate=!0};return{im:a,set(d,x,S,_=0){u++,h&&f();let g=l(d);e.set(x,g*3),s[g]=S,n[g]=_,i.attributes.aCol.needsUpdate=i.attributes.aPulse.needsUpdate=!0,a.visible=!0},clear(){if(!a.visible)return;let d=++u;h=!0,We(.45,x=>{d===u&&(c.value=1-x)},{done:()=>{d===u&&f()}})},update(d){if(!a.visible)return;let x=!1,S=1-Math.exp(-d*7);for(let _=0;_<64;_++){let g=t[_]+(s[_]-t[_])*S;t[_]=Math.abs(g-s[_])<.001?s[_]:g,t[_]>0&&(x=!0)}i.attributes.aK.needsUpdate=!0,x||(a.visible=!1)}}})(),Fh={pieces:[["d1","R"],["f1","R"],["g1","K"],["b2","B"],["e2","Q"],["f2","P"],["g2","P"],["h2","P"],["a3","P"],["d3","B"],["f3","N"],["c4","P"],["d4","P"],["a5","n"],["b6","p"],["e6","p"],["a7","p"],["b7","b"],["c7","q"],["e7","b"],["f7","p"],["g7","p"],["h7","p"],["c8","r"],["f8","r"],["g8","k"]],lines:[[["d4","d5",0,0,"d5"],["e6","d5",1,0,"exd5"],["c4","d5",1,0,"cxd5"],["b7","d5",1,0,"Bxd5"],["d3","h7",1,1,"Bxh7+"],["g8","h7",1,0,"Kxh7"],["d1","d5",1,0,"Rxd5"],["h7","g8",0,0,"Kg8"],["b2","g7",1,0,"Bxg7"],["g8","g7",1,0,"Kxg7"],["f3","e5",0,0,"Ne5"]],[["d4","d5",0,0,"d5"],["a5","c4",1,0,"Nxc4"],["e2","e4",0,0,"Qe4"],["g7","g6",0,0,"g6"],["d3","c4",1,0,"Bxc4"],["c7","c4",1,0,"Qxc4"],["e4","e5",0,0,"Qe5"],["f7","f6",0,0,"f6"],["e5","e6",1,1,"Qxe6+"]],[["d4","d5",0,0,"d5"],["c7","f4",0,0,"Qf4"],["f3","e5",0,0,"Ne5"],["e6","d5",1,0,"exd5"],["g2","g3",0,0,"g3"],["f4","h6",0,0,"Qh6"],["c4","d5",1,0,"cxd5"]]]},Rp=[{w:.05,k:1.3},{w:.05,k:1.15,c:[.45,.72,1]},{w:.05,k:1.15,c:[.75,.82,1]}],Pe={pieces:[],at:{},run:!1,gen:0,li:0,ply:0,next:0,trails:[],busy:!1},Cp=null,$p=()=>Cp||(Cp=Xh((i,e)=>{let t=9+(e-.5)*12,n=Math.min(255,t+i*215);return[n,n,n+1]})),Oh={K:1.48,Q:1.21,R:.812,B:1.086,N:1.06,P:.754};function ty(){Fh.pieces.forEach(([i,e])=>{if(i==="e2"&&e==="Q")return;let t=e.toUpperCase(),n=e===t,s=n?Es():Es({key:"onyx",ink:0,glow:.12,params:{color:16777215,map:$p(),roughness:.32,clearcoat:.55,clearcoatRoughness:.24,envMapIntensity:1.1,fog:!1}}),r=new Jt,a=[{geo:kc(t),x:0,y:0,z:0}];t==="N"?a.push({geo:Kh,x:0,y:.2,z:0}):t!=="R"&&t!=="B"&&t!=="P"&&qa(t).slice(1).forEach(o=>a.push(o)),a.forEach(o=>{let l=new st(o.geo,s);l.position.set(o.x,o.y,o.z),l.castShadow=!0,l.receiveShadow=!0,r.add(l)}),t==="N"?r.rotation.y=n?-Math.PI/2:Math.PI/2:r.rotation.y=(i.charCodeAt(0)*.9+ +i[1])%(Math.PI*2),s.userData.D.uHt.value=Oh[t],r.visible=!1,St.add(r),Pe.pieces.push({t,white:n,home:i,sq:i,g:r,mat:s})})}var ny=()=>({t:"Q",white:!0,home:"e2",sq:_t.Q.sq,g:_t.Q.g,mat:_t.Q.mat,hero:!0});function Qp(){Pe.at={},Pe.pieces.forEach(i=>{i.sq=i.home,i.g.position.copy(qt(i.home)),Pe.at[i.home]=i}),Pe.queen=ny(),Pe.at.e2=Pe.queen}function jp(i,e,t,n=.7){i.forEach((s,r)=>{let a=s.mat.userData.D,o=e+r/Math.max(1,i.length-1)*n;Ve(o,()=>{Pe.gen===t&&(s.g.visible=!0,a.uCut.value=1.15,r%3===0&&Je.tick(1700+r*40,.05))}),We(.55,l=>{Pe.gen===t&&(a.uCut.value=pt(1.15,-.15,l))},{delay:o,ease:$n,done:()=>{Pe.gen===t&&(a.uCut.value=-1)}})})}function e0(i,e,t,n=.4){i.forEach(s=>{if(!s.g.visible)return;let r=s.mat.userData.D;We(n,a=>{Pe.gen===t&&(r.uCut.value=pt(-.15,1.15,a))},{delay:e,ease:Ar,done:()=>{Pe.gen===t&&(s.hero||(s.g.visible=!1),r.uCut.value=s.hero?1.15:-1)}})})}function t0(){Kn.set("g8",Rc,.7,1),Kn.set("h7",Rc,.5),Kn.set("g7",Rc,.5),["c3","e5","f6","e4","f5","g6"].forEach(i=>Kn.set(i,ey,.24))}function n0(i){let e=++Pe.gen;return Pe.run=!1,Qp(),jp(Pe.pieces,i,e,.75),Ve(i+.9,()=>{Pe.gen===e&&(t0(),Je.chime(660,.08))}),Ve(i+1.6,()=>{Pe.gen===e&&(Pe.run=!0,Pe.li=0,Pe.ply=0,Pe.next=je+.4)}),i+1.6}function iy(){let i=++Pe.gen;Pe.run=!1,Pe.trails.splice(0).forEach(e=>e.fade(0,.4)),e0(Pe.pieces,0,i,.45),Pe.queen&&_t.Q.g.visible&&(_t.Q.mat.userData.D.uCut.value=-1),Kn.clear()}function sy(i,e,t){let[n,s,r,a]=i,o=Pe.at[n];if(!o)return .2;let l=r?Pe.at[s]:null;delete Pe.at[n],Pe.at[s]=o,o.sq=s,o.hero&&(_t.Q.sq=s);let c=qt(n),u=qt(s),h=o.t==="N",f=h?.62:.5+.04*c.distanceTo(u),d=Wc(c,u,Rp[e%Rp.length]);return d.draw(0,f*.95),Pe.trails.push(d),Je.slide(f),We(f,(x,S)=>{Pe.gen===t&&(o.g.position.lerpVectors(c,u,x),o.g.position.y=Math.sin(Math.PI*S)*(h?.5:.07))},{ease:Jn,done:()=>{if(Pe.gen===t){if(o.g.position.copy(u),Je.clack(r?.8:1,r?1:.7),Rs.pulse(s,r?1:.6),l){let x=l.mat.userData.D;Je.shimmer(.5,.06),We(.4,S=>{Pe.gen===t&&(x.uCut.value=pt(-.15,1.15,S))},{ease:Ar,done:()=>{Pe.gen===t&&(l.g.visible=!1,x.uCut.value=-1)}}),hi(u,1.2,.6)}if(a){let x=Object.keys(Pe.at).find(S=>Pe.at[S].t==="K"&&Pe.at[S].white!==o.white);x&&(Kn.set(x,Rc,1.1,1),Je.ping(1320,.1))}}}}),f}function ry(){if(!Pe.run||rn!==2||$i||je<Pe.next||Pe.busy)return;let i=Fh.lines[Pe.li%Fh.lines.length],e=Pe.gen;if(Pe.ply<i.length){let n=sy(i[Pe.ply],Pe.li,e);Pe.ply++,Pe.next=je+n+(Pe.ply===i.length?2.6:.55);return}Pe.busy=!0;let t=[...Pe.pieces,Pe.queen];Pe.trails.splice(0).forEach(n=>n.fade(0,.5)),Kn.clear(),e0(t,0,e,.45),Ve(.55,()=>{Pe.gen===e&&(Qp(),_t.Q.g.position.copy(qt("e2")),_t.Q.sq="e2",jp(t,0,e,.5),Ve(1,()=>{Pe.gen===e&&t0()}),Ve(1.5,()=>{Pe.gen===e&&(Pe.li++,Pe.ply=0,Pe.next=je+.3,Pe.busy=!1)}))})}var Cc=[];function Wc(i,e,{w:t=.03,k:n=1,c:s=null}={}){let r=e.clone().sub(i),a=r.length(),o={uProg:{value:0},uOp:{value:0},uLen:{value:a},uK:{value:n},uTime:{value:0},uCol:{value:new Le(...s||[1,1,1])}},l=new Rn(a,t);l.translate(a/2,0,0),l.rotateX(-Math.PI/2);let c=new At({uniforms:o,transparent:!0,depthWrite:!1,blending:jt,fog:!1,side:vn,vertexShader:"varying float vX; void main(){ vX = position.x; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uProg, uOp, uLen, uK, uTime; uniform vec3 uCol; varying float vX;
      void main(){
        float head = uProg * uLen; if (vX > head) discard;
        float glow = smoothstep(0.35, 0.0, head - vX) * step(uProg, 0.999);
        float run = 0.7 + 0.3 * sin((vX - uTime * 3.0) * 6.0);
        gl_FragColor = vec4(uCol * (0.9 * run + glow * 2.5) * uK, uOp);
      }`}),u=new st(l,c);u.position.set(i.x,.012,i.z),u.rotation.y=-Math.atan2(r.z,r.x),u.renderOrder=4,St.add(u);let h={mesh:u,u:o,draw(f,d){return Ve(f,()=>{o.uOp.value=1}),We(d,x=>{o.uProg.value=x},{delay:f,ease:$n}),h},fade(f=0,d=.5){return We(d,x=>{o.uOp.value=1-x},{delay:f,done:()=>h.kill()}),h},kill(){St.remove(u),l.dispose(),c.dispose();let f=Cc.indexOf(h);f>=0&&Cc.splice(f,1)}};return Cc.push(h),h}var ay="abcdefgh",Pc=(i,e)=>ay[i]+(e+1);var oy=[];function i0(){oy.splice(0).forEach(i=>i.fade(0,.4)),Kn.clear()}var yr=zn?2600:4200;function ly(i,e){let t=_t[i].parts,n=[],s=0,r=new H,a=new H,o=new H;t.forEach(c=>{let u=c.geo.attributes.position,h=c.geo.index,f=h?h.count:u.count;for(let d=0;d<f;d+=3){let x=h?h.getX(d):d,S=h?h.getX(d+1):d+1,_=h?h.getX(d+2):d+2;r.fromBufferAttribute(u,x),a.fromBufferAttribute(u,S),o.fromBufferAttribute(u,_);let g=a.clone().sub(r).cross(o.clone().sub(r)).length()/2;g<=0||(s+=g,n.push({a:r.clone().add(new H(c.x,c.y,c.z)),b:a.clone().add(new H(c.x,c.y,c.z)),c:o.clone().add(new H(c.x,c.y,c.z)),cum:s}))}});let l=new Float32Array(e*3);for(let c=0;c<e;c++){let u=Math.random()*s,h=0,f=n.length-1;for(;h<f;){let g=h+f>>1;n[g].cum<u?h=g+1:f=g}let d=n[h],x=Math.random(),S=Math.random();x+S>1&&(x=1-x,S=1-S);let _=d.a.clone().addScaledVector(d.b.clone().sub(d.a),x).addScaledVector(d.c.clone().sub(d.a),S);l[c*3]=_.x,l[c*3+1]=_.y,l[c*3+2]=_.z}return l}var $a={},Qe=(()=>{let i=new Pt,e=new Float32Array(yr*3),t=new Float32Array(yr*3),n=new Float32Array(yr*3),s=new Float32Array(yr);for(let l=0;l<yr;l++){let c=new H(bc(-1,1),bc(-.3,1),bc(-1,1)).normalize();n.set([c.x,c.y,c.z],l*3),s[l]=Math.random()}i.setAttribute("position",new Mt(e,3)),i.setAttribute("aA",new Mt(e,3)),i.setAttribute("aB",new Mt(t,3)),i.setAttribute("aR",new Mt(n,3)),i.setAttribute("aS",new Mt(s,1));let r={uMix:{value:0},uOp:{value:0},uPR:{value:Zn},uSwirl:{value:3.5},uTime:{value:0},uRotA:{value:0},uRotB:{value:0},uCA:{value:new H},uCB:{value:new H},uScat:{value:0},uVel:{value:new H}},a=new At({uniforms:r,transparent:!0,depthWrite:!1,blending:jt,fog:!1,vertexShader:`uniform float uMix, uPR, uSwirl, uTime, uRotA, uRotB, uScat; uniform vec3 uCA, uCB, uVel; attribute vec3 aA, aB, aR; attribute float aS; varying float vA;
      vec3 ry(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
      void main(){
        float m = smoothstep(0.0, 1.0, clamp((uMix - aS * 0.3) / 0.7, 0.0, 1.0));
        vec3 a = ry(aA, uRotA) + uCA, b = ry(aB, uRotB) + uCB;
        vec3 c = mix(uCA, uCB, m);
        vec3 p = mix(a, b, m);
        float s = sin(3.14159 * m);
        float ang = s * uSwirl * (0.5 + aS);
        vec2 d = p.xz - c.xz; float ca = cos(ang), sa = sin(ang);
        p.xz = c.xz + vec2(ca * d.x - sa * d.y, sa * d.x + ca * d.y);
        p += aR * s * 0.5;
        p.y += s * 0.3 * aS;
        float sj = uScat * (1.0 - m);
        vec2 dj = p.xz - c.xz; float aj = sj * (0.4 + aS * 0.9), cj = cos(aj), snj = sin(aj);
        p.xz = c.xz + vec2(cj * dj.x - snj * dj.y, snj * dj.x + cj * dj.y);
        p += aR * sj * 0.22;
        p -= uVel * aS * 0.045 * (1.0 - m);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.3 + aS * 2.0) * uPR * (4.2 / -mv.z);
        gl_Position = projectionMatrix * mv;
        vA = 0.5 + 0.5 * sin(uTime * 7.0 + aS * 50.0);
      }`,fragmentShader:`uniform float uOp; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.1, d); gl_FragColor = vec4(vec3(1.6), a * uOp * (0.45 + 0.55 * vA)); }`}),o=new js(i,a);return o.frustumCulled=!1,o.visible=!1,o.renderOrder=6,St.add(o),{pts:o,u:r,g:i}})();function s0(i,e,t,n=0){let s=_t[i],r=_t[e];return Ve(n,()=>{let a=$a[i],o=$a[e];Qe.g.attributes.aA.array.set(a),Qe.g.attributes.aB.array.set(o),Qe.g.attributes.aA.needsUpdate=Qe.g.attributes.aB.needsUpdate=!0,Qe.u.uRotA.value=s.g.rotation.y,Qe.u.uCA.value.copy(s.g.position),r.sq=t,r.g.position.copy(qt(t)),r.g.rotation.y=s.g.rotation.y,Qe.u.uRotB.value=r.g.rotation.y,Qe.u.uCB.value.copy(r.g.position),Qe.u.uMix.value=0,Qe.u.uScat.value=0,Qe.u.uVel.value.set(0,0,0),Qe.pts.visible=!0,s.mat.userData.D.uBase.value=s.g.position.y,r.mat.userData.D.uBase.value=r.g.position.y,es=.04,hi(s.g.position,1.8,.8)}),We(.9,a=>{s.mat.userData.D.uCut.value=pt(-.15,1.15,a),Qe.u.uOp.value=Math.min(1,a*1.6)},{delay:n,ease:Ar,done:()=>{s.g.visible=!1,s.mat.userData.D.uCut.value=-1}}),We(1.25,a=>{Qe.u.uMix.value=a},{delay:n+.55,ease:Jn}),Ve(n,()=>Je.shimmer(1.3,.04)),Ve(n+1.35,()=>{r.g.visible=!0,r.mat.userData.D.uCut.value=1.15,Ji=e,Je.ping(880,.05)}),We(.95,a=>{r.mat.userData.D.uCut.value=pt(1.15,-.15,a)},{delay:n+1.35,ease:$n,done:()=>{r.mat.userData.D.uCut.value=-1}}),We(1.1,(a,o)=>{r.edges.material.opacity=Math.sin(Math.PI*o)*.55},{delay:n+1.2,ease:a=>a}),We(.7,a=>{Qe.u.uOp.value=1-a},{delay:n+1.75,done:()=>{Qe.pts.visible=!1}}),Ve(n+2.2,()=>hi(r.g.position,1.4,.6)),n+2.35}var qi=zn?2200:3600,Oc=4,Th=new Map;function cy(i){if(Th.has(i))return Th.get(i);let e=i.attributes.position,t=i.index,n=t?t.count:e.count,s=[],r=0,a=new H,o=new H,l=new H;for(let u=0;u<n;u+=3){a.fromBufferAttribute(e,t?t.getX(u):u),o.fromBufferAttribute(e,t?t.getX(u+1):u+1),l.fromBufferAttribute(e,t?t.getX(u+2):u+2);let h=o.clone().sub(a).cross(l.clone().sub(a)).length()/2;h<=0||(r+=h,s.push([a.clone(),o.clone(),l.clone(),r]))}let c={tris:s,total:r};return Th.set(i,c),c}function Pp(i,e,t){i.updateMatrixWorld(!0);let n=[],s=0;i.traverse(o=>{if(o.isMesh&&o.geometry){let l=cy(o.geometry);l.total>0&&(s+=l.total,n.push({o,T:l,cum:s}))}});let r=[],a=new H;for(let o=0;o<e;o++){let l=Math.random()*s,c=n[n.length-1];for(let v of n)if(v.cum>=l){c=v,l-=v.cum-v.T.total;break}let u=c.T.tris,h=0,f=u.length-1,d=Math.random()*c.T.total;for(;h<f;){let v=h+f>>1;u[v][3]<d?h=v+1:f=v}let[x,S,_]=u[h],g=Math.random(),y=Math.random();g+y>1&&(g=1-g,y=1-y),a.copy(x).addScaledVector(S.clone().sub(x),g).addScaledVector(_.clone().sub(x),y);let M=sn(a.y/t);a.applyMatrix4(c.o.matrixWorld),r.push([a.x,a.y,a.z,M])}return r}var Zi=(()=>{let i=new Pt,e=qi*Oc,t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e),r=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e);for(let h=0;h<e;h++)o[h]=h%Oc;i.setAttribute("position",new Mt(t,3)),i.setAttribute("aG",new Mt(o,1)),i.setAttribute("aA",new Mt(t,3)),i.setAttribute("aB",new Mt(n,3)),i.setAttribute("aT",new Mt(s,1)),i.setAttribute("aS",new Mt(r,1)),i.setAttribute("aH",new Mt(a,1));let l={uT:{value:0},uArrive:{value:2},uOp:{value:0},uPR:{value:Zn},uC:{value:new H},uTime:{value:0}},c=new At({uniforms:l,transparent:!0,depthWrite:!1,blending:jt,fog:!1,vertexShader:`uniform float uT, uArrive, uPR, uTime; uniform vec3 uC; attribute vec3 aA, aB; attribute float aT, aS, aH, aG; varying float vA;
      void main(){
        float tg = uT - aG * 0.03;
        float t = tg - aT;
        // gather: from the piece's surface into a thin column of light over the square, spiralling as it is pulled in
        float k = clamp(t / max(0.25, uArrive - aT), 0.0, 1.0);
        float kr = pow(k, 1.7);
        vec2 d0 = aA.xz - uC.xz; float r0 = length(d0), a0 = atan(d0.y, d0.x);
        float r = mix(r0, 0.035 + 0.05 * aS, kr);
        float ang = a0 + (1.6 + 2.2 * aS) * kr * (r0 > 0.01 ? 1.0 : 0.0);
        float colY = 0.12 + aH * 1.25 + aS * 1.9;
        float y = mix(aA.y, colY, smoothstep(0.0, 1.0, k)) + sin(3.14159 * k) * (0.35 + 0.8 * aS);
        vec3 p = vec3(uC.x + cos(ang) * r, y, uC.z + sin(ang) * r);
        // land: the column pours down into the shape of the king
        float l = smoothstep(0.0, 1.0, clamp((tg - uArrive - 0.05 - aS * 0.35 - (1.0 - aH) * 0.15) / 0.6, 0.0, 1.0));
        vec2 dl = p.xz - uC.xz; float al = -l * (1.0 - l) * 3.0;
        p.xz = uC.xz + vec2(cos(al) * dl.x - sin(al) * dl.y, sin(al) * dl.x + cos(al) * dl.y);
        p = mix(p, aB, l);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float glow = (1.0 + 1.2 * smoothstep(0.55, 1.0, k) * (1.0 - l)) * (1.0 - aG * 0.17);
        gl_PointSize = (1.5 + aS * 2.3) * uPR * glow * (6.5 / -mv.z);
        gl_Position = projectionMatrix * mv;
        float born = smoothstep(0.0, 0.12, t);
        vA = born * (0.6 + 0.4 * sin(uTime * 8.0 + aS * 60.0)) * (0.9 + 0.5 * smoothstep(0.3, 1.0, k)) * (1.0 - aG * 0.22) * (1.0 - 0.6 * l * step(0.5, aG));
      }`,fragmentShader:`uniform float uOp; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.08, d); gl_FragColor = vec4(1.6, 1.7, 1.95, a * uOp * vA); }`}),u=new js(i,c);return u.frustumCulled=!1,u.visible=!1,u.renderOrder=6,St.add(u),{pts:u,u:l,g:i,aA:t,aB:n,aT:s,aS:r,aH:a,t0:0,on:!1}})();function uy(i,e,t){let n=Zi,s=i.map(f=>f.ht*(f.big||1)),r=s.reduce((f,d)=>f+d,0),a=s.map(f=>Math.max(24,Math.floor(qi*f/r))),o=a.reduce((f,d)=>f+d,0)-qi;for(let f=0;o>0;f=(f+1)%a.length)a[f]>24&&(a[f]--,o--);let l=Pp(e.g,qi,e.ht),c=Array.from({length:qi},(f,d)=>d).sort((f,d)=>l[f][3]-l[d][3]),u=[];for(i.forEach((f,d)=>Pp(f.g,a[d],f.ht).forEach(x=>u.push([x[0],x[1],x[2],x[3],f.t0+f.dur*sn((x[3]+.15)/1.3)])));u.length<qi;)u.push(u[u.length%Math.max(1,u.length)]||[0,0,0,0,0]);let h=Array.from({length:qi},(f,d)=>d).sort((f,d)=>u[f][3]-u[d][3]);for(let f=0;f<qi;f++){let d=u[h[f]],x=l[c[f]],S=Math.random();for(let _=0;_<Oc;_++){let g=f*Oc+_;n.aA.set([d[0],d[1],d[2]],g*3),n.aB.set([x[0],x[1],x[2]],g*3),n.aT[g]=d[4],n.aS[g]=S,n.aH[g]=x[3]}}["aA","aB","aT","aS","aH"].forEach(f=>{n.g.attributes[f].needsUpdate=!0}),n.g.attributes.position.needsUpdate=!0,n.u.uArrive.value=t,n.u.uC.value.copy(e.g.position),n.u.uPR.value=Zn,n.t0=je,n.u.uT.value=0,n.u.uOp.value=1,n.pts.visible=!0,n.on=!0}function hy(){Zi.on&&(Zi.u.uT.value=je-Zi.t0,Zi.u.uTime.value=je)}function fy(i,e=0){let t=i.charCodeAt(0)-97,n=+i[1]-1;for(let r=0;r<8;r++)for(let a=0;a<8;a++){let o=Math.max(Math.abs(r-t),Math.abs(a-n));o===0||o>3||Ve(e+o*.06,()=>Rs.pulse(String.fromCharCode(97+r)+(a+1),.32/(1+o*.7)))}let s=qt(i);Ve(e,()=>{zt.u.uPC.value.set(s.x,s.z),zt.u.uPulseK.value=1}),We(1.5,r=>{zt.u.uPulse.value=r*8.5,zt.u.uPulseK.value=1-r*r},{delay:e,ease:$n,done:()=>{zt.u.uPulse.value=-9,zt.u.uPulseK.value=0}})}function dy(i,e=0){let t=_t.K,n=_t.Q,s=++Pe.gen,r=e+2.15;return Pe.run=!1,Pe.trails.splice(0).forEach(a=>a.fade(0,.5)),Kn.clear(),Ve(e,()=>{t.sq=i,t.g.position.copy(qt(i)),t.g.rotation.y=-.6,t.mat.userData.D.uBase.value=t.g.position.y;let a=t.g.position,o=Pe.pieces.filter(c=>c.g.visible).map(c=>({g:c.g,ht:Oh[c.t],mat:c.mat,hero:!1}));n.g.visible&&o.push({g:n.g,ht:Oh.Q,mat:n.mat,hero:!0,big:1.3});let l=Math.max(...o.map(c=>c.g.position.distanceTo(a)),1);o.forEach(c=>{c.t0=.05+(1-c.g.position.distanceTo(a)/l)*.75,c.dur=.6}),uy(o,t,r-e),o.forEach(c=>{let u=c.mat.userData.D;u.uBase.value=c.g.position.y,We(c.dur,h=>{Pe.gen===s&&(u.uCut.value=pt(-.15,1.15,h))},{delay:c.t0,ease:Ar,done:()=>{Pe.gen===s&&(c.g.visible=!1,u.uCut.value=-1)}})}),Je.gather(r-e-.02,1)}),Ve(r,()=>{es=.05,hi(qt(i),2.6,1),Rs.pulse(i,.9),fy(i,.02)}),Ve(r+.2,()=>{t.g.visible=!0,t.mat.userData.D.uCut.value=1.15,Ji="K"}),We(1,a=>{t.mat.userData.D.uCut.value=pt(1.15,-.15,a)},{delay:r+.2,ease:$n,done:()=>{t.mat.userData.D.uCut.value=-1}}),We(1.2,(a,o)=>{t.edges.material.opacity=Math.sin(Math.PI*o)*.6},{delay:r+.1,ease:a=>a}),We(.8,a=>{Zi.u.uOp.value=1-a},{delay:r+.75,done:()=>{Zi.pts.visible=!1,Zi.on=!1}}),Ve(r+1.2,()=>hi(qt(i),1.4,.6)),r+1.2}var py=i=>{let e=0,t=1;for(let n=0;n<24;n++){let s=(e+t)/2;Jn(s)<i?e=s:t=s}return(e+t)/2};function my(i,e,t,n=0){let s=_t[i],r=_t[e],a=t.map(qt),o=t[t.length-1],l=[],c=0;for(let g=1;g<a.length;g++){let y=a[g].distanceTo(a[g-1]);l.push({a:a[g-1],b:a[g],l0:c,len:y,dir:a[g].clone().sub(a[g-1]).normalize(),line:null}),c+=y}let u=g=>l.find(y=>g<=y.l0+y.len+1e-6)||l[l.length-1],h=.7,f=n+.95,d=1.1,x=f+d,S=g=>f+d*py(g/c);Ve(n,()=>{Qe.g.attributes.aA.array.set($a[i]),Qe.g.attributes.aB.array.set($a[e]),Qe.g.attributes.aA.needsUpdate=Qe.g.attributes.aB.needsUpdate=!0,Qe.u.uRotA.value=s.g.rotation.y,Qe.u.uCA.value.copy(s.g.position),r.sq=o,r.g.position.copy(a[a.length-1]),r.g.rotation.y=s.g.rotation.y+1.2,Qe.u.uRotB.value=r.g.rotation.y,Qe.u.uCB.value.copy(r.g.position),Qe.u.uMix.value=0,Qe.u.uScat.value=0,Qe.u.uVel.value.set(0,0,0),Qe.pts.visible=!0,s.mat.userData.D.uBase.value=s.g.position.y,r.mat.userData.D.uBase.value=0,es=.04,hi(s.g.position,1.8,.8)}),We(.7,g=>{s.mat.userData.D.uCut.value=pt(-.15,1.15,g),Qe.u.uOp.value=Math.min(1,g*1.6)},{delay:n,ease:Ar,done:()=>{s.g.visible=!1,s.mat.userData.D.uCut.value=-1}}),We(.35,g=>{Qe.u.uScat.value=.2*g,Qe.u.uCA.value.y=-.05*Math.sin(Math.PI*g)},{delay:f-.35,ease:Bh}),Ve(n,()=>Je.shimmer(.9,.045)),Ve(f-.02,()=>{Je.whoosh(d+.2,!0,.13),Ji=e,l.forEach(g=>{g.line=Wc(g.a,g.b,{w:.05,k:1.3}),g.line.u.uOp.value=1})});let _=new H;We(d,(g,y)=>{let M=g*c,v=u(M),T=sn((M-v.l0)/v.len);_.lerpVectors(v.a,v.b,T),Qe.u.uCA.value.set(_.x,Math.sin(Math.PI*g)*h,_.z),r.g.position.set(_.x,0,_.z);let w=c*(y<.5?12*y*y:12*(1-y)*(1-y))/d;Qe.u.uVel.value.copy(v.dir).multiplyScalar(w),Qe.u.uVel.value.y=Math.PI*h*Math.cos(Math.PI*g)*w/c,Qe.u.uScat.value=.2+.5*Math.sin(Math.PI*y),l.forEach(m=>{m.line&&(m.line.u.uProg.value=sn((M-m.l0)/m.len))})},{delay:f,ease:Jn});for(let g=1;g<c-.5;g+=1){let y=g;Ve(S(y),()=>{let M=u(y),v=M.a.clone().lerp(M.b,(y-M.l0)/M.len),T=Math.round(v.x+3),w=Math.round(3-v.z);Rs.pulse(Pc(T,w),.7)})}return Ve(x,()=>{Qe.u.uCA.value.copy(a[a.length-1]),Qe.u.uVel.value.set(0,0,0),r.g.position.copy(a[a.length-1]),Rs.pulse(o,1),hi(r.g.position,1.6,.8),es=.03,Je.thud(.4),Je.shimmer(.7,.035),Je.ping(1046,.05),l.forEach(g=>{g.line&&g.line.fade(1.6,.8)})}),We(.4,g=>{Qe.u.uScat.value=.2*(1-g)},{delay:x}),We(1.05,g=>{Qe.u.uMix.value=g},{delay:f+d*.4,ease:Jn}),Ve(x+.05,()=>{r.g.visible=!0,r.mat.userData.D.uCut.value=1.15}),We(.7,g=>{r.mat.userData.D.uCut.value=pt(1.15,-.15,g)},{delay:x+.05,ease:$n,done:()=>{r.mat.userData.D.uCut.value=-1}}),We(.9,(g,y)=>{r.edges.material.opacity=Math.sin(Math.PI*y)*.55},{delay:x-.05,ease:g=>g}),We(.5,g=>{Qe.u.uOp.value=1-g},{delay:x+.3,done:()=>{Qe.pts.visible=!1,Qe.u.uScat.value=0}}),{jump:f,land:x,done:x+.75}}var gy=new sr(.97,1,96);function hi(i,e=1.8,t=.8){let n=new An({color:16777215,transparent:!0,opacity:.7,blending:jt,depthWrite:!1,side:vn,fog:!1}),s=new st(gy,n);s.rotation.x=-Math.PI/2,s.position.set(i.x,.01,i.z),St.add(s),We(t,r=>{let a=pt(.35,e,r);s.scale.set(a,a,a),n.opacity=.7*(1-r)},{ease:$n,done:()=>{St.remove(s),n.dispose()}})}function r0(i,e,t,n,s=!0){Ve(t,()=>Je.slide(n,.05));let r=_t[i],a,o=qt(e),l=null;Ve(t,()=>{a=r.g.position.clone(),s&&(l=Wc(a,o,{w:.05,k:1.3}).draw(0,n*.95)),r.sq=e}),We(n,(c,u)=>{r.g.position.lerpVectors(a,o,c),r.g.position.y=Math.sin(Math.PI*u)*.06},{delay:t,ease:Jn,done:()=>{r.g.position.y=0,hi(o,1.3,.6),l&&l.fade(.4,.8)}})}var en=(()=>{let e=new Fn(.012,1,.012);e.translate(0,.5,0);let t=new An({color:16777215,transparent:!0,opacity:0,blending:jt,depthWrite:!1,fog:!1}),n=new hs(e,t,112);return n.visible=!1,n.frustumCulled=!1,St.add(n),{im:n,mat:t,N:112,amp:0,on:!1,lastPulse:0}})(),Ip=new ht,xy=new Nn,Lp=new H,Dp=new H,Eh=0;function _y(){if(!en.im.visible)return;let i=Cs().g.position;Eh=pt(Eh,Je.level(),.35);for(let e=0;e<en.N;e++){let t=e/en.N*Math.PI*2,n=Math.abs(Math.sin(je*7.3+e*.7)*Math.sin(je*3.1+e*.23)+.35*Math.sin(je*13+e*1.9)),s=.015+en.amp*n*.32*(.6+.4*Math.sin(je*2+e*.05))*(Je.isOn()?.45+Eh*2.2:1);Dp.set(i.x+Math.cos(t)*.7,.01,i.z+Math.sin(t)*.7),Lp.set(1,s,1),Ip.compose(Dp,xy,Lp),en.im.setMatrixAt(e,Ip)}en.im.instanceMatrix.needsUpdate=!0,en.on&&je-en.lastPulse>.85&&(en.lastPulse=je,hi(i,2.4,1.6))}function Bc(i,e=0){en.on=!1,i?(Ve(e,()=>{en.im.visible=!0,en.on=!0}),We(.8,t=>{en.amp=t,en.mat.opacity=.85*t},{delay:e})):We(.5,t=>{en.amp=1-t,en.mat.opacity=.85*(1-t)},{delay:e,done:()=>{en.im.visible=!1}})}var Ah=["King e5. In the endgame, the king becomes a fighting piece.","It walks to the centre, where every square is within reach."],Ga=null;function zc(i,e=0){let t=ui("#caption"),n=ui("#caption .t");if(clearInterval(Ga),!i){t.classList.remove("on"),Je.duck(!1);return}Ve(e,()=>{t.classList.add("on");let s=0,r=()=>{let a=Ah[s%Ah.length],o=s<Ah.length?Je.say("n"+s):0;o&&(Je.duck(!0),Ve(o+.2,()=>Je.duck(!1)));let l=o?Math.max(18,o*1e3*.9/a.length):34,c=0;n.textContent="",clearInterval(Ga),Ga=setInterval(()=>{c++,n.textContent=a.slice(0,c),c>=a.length&&(clearInterval(Ga),Ga=setTimeout(()=>{s++,t.classList.contains("on")&&r()},o?1100:2200))},l)};r()})}var Er={on:!1,next:0},wh=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function vy(){for(let r=0;r<5;r++)Ve(r*.11+Math.random()*.05,()=>Je.blip());let i=Cs().sq,e=(r,a)=>r>=0&&r<8&&a>=0&&a<8,t=i.charCodeAt(0)-97,n=+i[1]-1,s=(r,a,o,l)=>{Wc(qt(r),qt(a),{w:.02,k:l*1.2}).draw(o,.22).fade(o+1.1,.7),Ve(o+.2,()=>Rs.pulse(a,l*.35))};wh.forEach(([r,a],o)=>{let l=t+r,c=n+a;if(!e(l,c))return;let u=Pc(l,c);s(i,u,o*.03,1);for(let h=0;h<2;h++){let[f,d]=wh[Math.floor(Math.random()*8)],x=1+Math.floor(Math.random()*3),S=l+f*x,_=c+d*x;if(!e(S,_))continue;let g=Pc(S,_);if(s(u,g,.3+o*.03+h*.05,.7),Math.random()<.6){let[y,M]=wh[Math.floor(Math.random()*8)],v=1+Math.floor(Math.random()*2),T=S+y*v,w=_+M*v;e(T,w)&&s(g,Pc(T,w),.62+o*.03,.45)}}})}function Vc(i,e=0){Er.on=!1,i&&Ve(e,()=>{Er.on=!0,Er.next=je}),ui("#eval").classList.toggle("on",i),i&&My(e)}function yy(){Er.on&&je>=Er.next&&(vy(),Er.next=je+2.3)}function My(i){let e=ui("#eval .fill");[62,41,55,47,52,50].forEach((n,s)=>Ve(i+.3+s*.45,()=>{e.style.height=n+"%"}))}var Ye={az:.4,el:.12,dist:4.4,tgt:new H(0,.62,0),ox:0,oy:0,phase:0,orbit:.06,pk:.35};function oi(i,e,t=0,n=0){let s;We(e,r=>{s||(s={az:Ye.az,el:Ye.el,dist:Ye.dist,tgt:Ye.tgt.clone(),ox:Ye.ox,oy:Ye.oy,orbit:Ye.orbit,pk:Ye.pk,ph:Ye.phase,ph1:Math.round(Ye.phase/(Math.PI*2))*Math.PI*2}),i.zero&&(Ye.phase=pt(s.ph,s.ph1,r));let a=i.tgt;Ye.az=pt(s.az,i.az+(i.zero?Math.round(n/(Math.PI*2))*Math.PI*2:n),r),Ye.el=pt(s.el,i.el,r),Ye.dist=pt(s.dist,i.dist,r)+Math.sin(Math.PI*r)*(i.punch||0),Ye.tgt.set(pt(s.tgt.x,a[0],r),pt(s.tgt.y,a[1],r),pt(s.tgt.z,a[2],r));let o=(i.ox||0)+(i.pox||0)*$h();Ye.ox=pt(s.ox,o,r),Ye.oy=pt(s.oy,i.oy||0,r),Ye.orbit=pt(s.orbit,i.orbit,r),Ye.pk=pt(s.pk,i.pk===void 0?.35:i.pk,r)},{delay:t,ease:Jn,done:()=>{Ye.az=(Ye.az%(Math.PI*2)+Math.PI*2)%(Math.PI*2)}})}function Sy(i){Ye.az=i.az,Ye.el=i.el,Ye.dist=i.dist,Ye.tgt.set(...i.tgt),Ye.ox=(i.ox||0)+(i.pox||0)*$h(),Ye.oy=i.oy||0,Ye.orbit=i.orbit,Ye.pk=i.pk===void 0?.35:i.pk}var by=Ye;function a0(i,e){let t=$h();Lc||(Ye.phase+=e*Ye.orbit),Mn.fov=30+12*t;let n=Ye.dist*(1+Ye.pk*t),s=Ye.az+Ye.phase,r=Ye.el+(Lc?0:Math.sin(i*.21)*.025);Mn.position.set(Ye.tgt.x+n*Math.cos(r)*Math.sin(s),Ye.tgt.y+n*Math.sin(r),Ye.tgt.z+n*Math.cos(r)*Math.cos(s)),Mn.up.set(0,1,0),Mn.lookAt(Ye.tgt),Mn.setViewOffset(Sn,Ci,Ye.ox*Sn,Ye.oy*Ci,Sn,Ci),Mn.updateProjectionMatrix(),ws.rotation.y=s,ws.position.set(Ye.tgt.x,0,Ye.tgt.z)}var $h=()=>sn((1.05-Sr)/.6),gT=qt("f6"),br=qt("e5"),xT=qt("e6"),_T=qt("e2"),tn=[{piece:"N",sq:"d4",ex:!1,grid:!1,bg:0,light:[.56,.5],shot:{az:.45,el:.12,dist:3.75,tgt:[0,.47,0],orbit:.07,oy:0,pk:.13}},{piece:"N",sq:"d4",ex:!0,grid:!1,bg:.32,light:[.74,0],shot:{az:-.2,el:.15,dist:5.35,tgt:[0,1.02,0],orbit:.035,oy:.035,pk:.2,pox:.2}},{piece:"Q",sq:"e2",ex:!1,grid:!0,puzzle:!0,bg:.28,shot:{az:.08,el:.95,dist:18,tgt:[.5,0,-.6],orbit:0,oy:-.1,pk:.1,pox:.14,zero:!0}},{piece:"K",sq:"e5",ex:!1,grid:!0,wave:!0,bg:.28,shot:{az:-.3,el:.24,dist:5.6,tgt:[br.x,.62,br.z],orbit:.018,oy:-.1,pk:.45}},{piece:"K",sq:"e5",ex:!1,grid:!0,tree:!0,bg:.08,shot:{az:-.35,el:1.18,dist:10.5,tgt:[.5,0,-.5],orbit:.018,oy:-.02,pk:.75}},{piece:"N",sq:"d4",ex:!1,grid:!1,cards:!0,bg:.6,shot:{az:.6,el:.14,dist:5.9,tgt:[0,.6,0],orbit:.06,oy:.02,pk:.5}}],rn=0,$i=!0,Qh=!1,es=0,jh=.42,Rh=Array.from(document.querySelectorAll(".scene"));function bs(i,e){Rh.forEach((t,n)=>{n!==i&&t.classList.contains("on")&&(t.classList.remove("on"),t.classList.add("out"))}),Ve(e,()=>{Rh.forEach(t=>t.classList.remove("out")),Rh[i].classList.add("on")})}function Wa(i,e=0,t=1.2){let n;We(t,s=>{n===void 0&&(n=Yi.v),Yi.v=pt(n,i,s)},{delay:e})}function o0(i=0){let e=kp();We(.3,t=>{e.scale.set(1+.04*t,1-.05*t,1+.04*t)},{delay:i,ease:$n}),Ve(i+.3,()=>{e.scale.setScalar(1),e.visible=!1,xt.grp.visible=!0,xt.frags.forEach(t=>{t.e=0,t.drift=0}),es=.05,jh=.12,hi(e.position,2.2,.9),Qh=!0}),xt.frags.forEach((t,n)=>We(1.5,s=>{t.e=s,n===xt.frags.length-1&&(xt.amt=sn(s))},{delay:i+.3+t.L*.05+n%4*.015,ease:vv})),We(1.4,t=>Zh.forEach(n=>{n.uniforms.uGlow.value=t}),{delay:i+.5}),xt.rings.forEach((t,n)=>t.show(i+.75+n*.06,.9)),xt.axis.show(i+.55,1.1),Ve(i+.3,()=>{Je.deployM()}),Ve(i+1.15,()=>document.documentElement.classList.add("ex"));for(let t=0;t<6;t++)Ve(i+1.15+t*.11,()=>Je.nodeM(t)),Ve(i+1.7+t*.11,()=>Je.typeM(t,6+t%3)),Ve(i+1.92+t*.11,()=>Je.streamM(t));return i+2.3}function l0(i=0){return Ve(i,()=>document.documentElement.classList.remove("ex")),xt.rings.forEach(e=>Ve(i,()=>e.mesh.visible&&e.hide(.3))),Ve(i,()=>xt.axis.mesh.visible&&xt.axis.hide(.3)),We(.4,e=>Zh.forEach(t=>{t.uniforms.uGlow.value=1-e}),{delay:i}),xt.frags.forEach(e=>{let t,n,s;We(.75,r=>{t===void 0&&(t=e.e,n=e.drift,s=Math.PI*2*Math.round((e.rr*t+n)/(Math.PI*2))),e.e=pt(t,0,r),e.drift=pt(n,s,r),xt.amt=Math.min(xt.amt,1-r)},{delay:i+.1+(5-e.L)*.03,ease:Jn})}),Ve(i,()=>Je.retractM(1)),Ve(i+1.05,()=>{xt.grp.visible=!1,kp().visible=!0,jh=.42,Qh=!1,Je.lockM()}),i+1.1}var Ty={1(i=0){return oi(tn[1].shot,1.9+i,.1,-.6),Wa(.32,.3,1.6+i*.5),zp(tn[1].light[0],tn[1].light[1],.2,1.4),bs(1,.2),o0(i)},2(){let i=l0(0);bs(2,.4),oi({...tn[2].shot,tgt:[0,.7,0],dist:5.2,el:.22},1.75,.2,Math.PI*1.15),Wa(.28,.4),Uh(!0,i+.1,1.6);let e=my("N","Q",["d4","d2","e2"],i-.1);return oi(tn[2].shot,2.3,e.jump),n0(e.land+.25)+.2},3(){i0(),oi({az:.08,el:.78,dist:12.5,tgt:[br.x,.35,br.z],orbit:0,oy:-.06,pk:.2,pox:.06},2.3,.05);let i=dy("e5",.05);return oi(tn[3].shot,2.6,i-1.15),bs(3,i-.6),Bc(!0,i+.1),zc(!0,i+.3),i+.9},4(){return Bc(!1),zc(!1),bs(4,.5),oi(tn[4].shot,2.4,0,.5),Wa(.08),Vc(!0,1.4),2.6},5(){Vc(!1),bs(5,.4),oi({...tn[5].shot,tgt:[br.x,.7,br.z]},2.2,0,Math.PI*1.1);let i=s0("K","N","e5",.4);return r0("N","d4",i,.8),Uh(!1,i+.4),oi(tn[5].shot,1.6,i-.1),Wa(.6,i),Ve(i+.6,()=>{document.documentElement.classList.add("cardson"),Je.pad(3.4,.045),Je.tick(1800,.04)}),i+1.3}};function Np(i,e=rn){let t=tn[i];i0(),iy(),Bc(!1),zc(!1),Vc(!1),document.documentElement.classList.remove("cardson");let n=0;return Qh&&!t.ex&&(n=l0(0)),Ji!==t.piece?n=s0(Ji,t.piece,t.sq,n):Cs().sq!==t.sq&&(r0(Ji,t.sq,n,.9),n+=1),Uh(!!t.grid,n*.5),oi(t.shot,Math.max(1.8,n+.6),0,i<e?-.8:.8),Wa(t.bg,.2),zp(t.light?t.light[0]:1,t.light?t.light[1]:0,.2,1.2),bs(i,.4),t.ex&&(n=o0(n)),t.puzzle&&n0(n+.2),t.wave&&(Bc(!0,n+.2),zc(!0,n+.4)),t.tree&&Vc(!0,n+.4),t.cards&&Ve(n+.3,()=>document.documentElement.classList.add("cardson")),Math.max(n+.9,2)}function Ii(i){if(document.documentElement.classList.contains("gate-on")||$i||i===rn||i<0||i>=tn.length)return;$i=!0;let e=document.documentElement;e.classList.add("busy"),e.dataset.scene=i,u0.forEach((r,a)=>r.classList.toggle("on",a===i));let t=rn,n=t===0?Xv():0;Iv(i),i===1&&t===0?Je.chargeM(Math.max(.8,n+.3)):i===3&&t===2||Je.whoosh(1.5,i>t,.2),Je.bedTo(i),Je.mPage(i),Je.mFill();let s=()=>{$i=!1,e.classList.remove("busy"),rn===0&&(ci=je+Nc,Hh())};rn=i,i===t+1?Ve(Ty[i](n),s):n>0?Ve(n,()=>Ve(Np(i,t),s)):Ve(Np(i,t),s)}var Up=0,Mc=!1,Sc=0;window.addEventListener("wheel",i=>{if(i.target.closest&&i.target.closest(".cards"))return;i.preventDefault();let e=performance.now(),t=e-Up>220;if(Up=e,t&&(Sc=0,Mc=!1),!Mc){if($i){Mc=!0;return}Sc+=i.deltaY,Math.abs(Sc)>24&&(Mc=!0,Ii(rn+(Sc>0?1:-1)))}},{passive:!1});var Ic=null,c0=0;window.addEventListener("touchstart",i=>{i.touches.length===1&&(Ic=i.touches[0].clientY)},{passive:!0});window.addEventListener("touchmove",i=>i.preventDefault(),{passive:!1});window.addEventListener("touchend",i=>{if(Ic===null)return;let e=Ic-i.changedTouches[0].clientY;Ic=null,Math.abs(e)>40&&(c0=performance.now()+500,Ii(rn+(e>0?1:-1)))},{passive:!0});window.addEventListener("click",i=>{performance.now()<c0||rn>=tn.length-1||i.target.closest("a, button")||Ii(rn+1)});window.addEventListener("keydown",i=>{if(!(i.metaKey||i.ctrlKey||i.altKey||["Shift","Tab","Control","Meta","Alt","CapsLock"].includes(i.key))){if(["ArrowUp","PageUp","ArrowLeft"].includes(i.key)){i.preventDefault(),Ii(rn-1);return}if(i.key==="Home"){Ii(0);return}if(i.key==="End"){Ii(tn.length-1);return}rn>=tn.length-1||(i.preventDefault(),Ii(rn+1))}});var u0=Array.from(document.querySelectorAll("#dots button"));u0.forEach((i,e)=>i.addEventListener("click",t=>{t.stopPropagation(),Ii(e)}));ui("#snd").addEventListener("click",i=>{i.stopPropagation(),Je.toggle()});function ef(){Sn=window.innerWidth,Ci=window.innerHeight,Sr=Sn/Ci,Dt.setPixelRatio(Zn),Dt.setSize(Sn,Ci,!1),Qi.setPixelRatio(Zn),Qi.setSize(Sn,Ci),Mn.aspect=Sr,Ka.uniforms.uAspect.value=Sr,Qe.u.uPR.value=Zn,Jp.setAttribute("viewBox",`0 0 ${Sn} ${Ci}`),Jh.forEach(i=>{i.sz=null}),document.documentElement.classList.toggle("portrait",Sr<.95)}window.addEventListener("resize",ef);var h0={t0:performance.now()},Ch=0;function f0(i){let e=je;je=window.__vt!=null?window.__vt:(i-h0.t0)/1e3;let t=sn(je-e,0,.05);Mv();let n=Cs();Lc||(n.g.rotation.y+=t*jh),Hv(),Vt.uTime.value=je,qh.forEach(s=>{s.u.uTime.value=je}),Cc.forEach(s=>{s.u.uTime.value=je}),Qe.u.uTime.value=je,zt.u.uTime.value=je,Za.mesh.position.set(n.g.position.x,.004,n.g.position.z),Za.mesh.rotation.y=n.g.rotation.y,As.material.uniforms.uC.value.set(n.g.position.x,n.g.position.z),rn===0&&!$i?!at.on&&je>ci&&Wv():at.on||(ci=Math.max(ci,je+Nc)),$v(t),Kv(),Rs.update(t),Kn.update(t),ry(),hy(),_y(),yy(),es*=Math.exp(-t*8),Ka.uniforms.uTime.value=je,Ka.uniforms.uFlash.value=es,a0(je,t),Lv(),Dt.shadowMap.needsUpdate=!0,Wh||Qi.render(t),jv(),window.__vt==null&&je>5&&!document.hidden&&(t>.036&&Ch++,Ch>90&&Zn>1&&(Zn=Math.max(1,Zn-.25),Ch=0,ef())),requestAnimationFrame(f0)}function Fp(i,e){Object.values(_t).forEach(l=>{l.g.visible=l.type===i,l.g.position.set(0,0,0)});let t=800,n=560,s=new hn(26,t/n,.1,100),r=_t[i];r.g.rotation.y=e;let a=r.ht*.48,o=r.ht*3.4;return s.position.set(Math.sin(.5)*o,a+.35,Math.cos(.5)*o),s.lookAt(0,a,0),Dt.setPixelRatio(1),Dt.setSize(t,n,!1),Dt.shadowMap.needsUpdate=!0,Dt.render(St,s),Dt.domElement.toDataURL("image/jpeg",.9)}async function Ey(){try{await document.fonts.load("600 16px Inter")}catch{}kh=Sp(zn?64:84),Kh=Sp(40),["N","Q","K"].forEach(Fv),["N","Q","K"].forEach(i=>{$a[i]=ly(i,yr)}),Dc=_t.N.g,kv(),ty(),Jv(),Yp(!1),Gp(Fc.image.getContext("2d"),1024),Fc.needsUpdate=!0,ws.visible=!1,ui("#cvA").src=Fp("N",.9),ui("#cvB").src=Fp("K",.4),ws.visible=!0,Object.values(_t).forEach(i=>{i.g.visible=!1}),_t.N.g.visible=!0,_t.N.g.position.copy(qt("d4")),_t.N.g.rotation.y=.6,Bn.k=tn[0].light[0],Vt.uInk.value=tn[0].light[1],Pv(0),ef(),Sy(tn[0].shot);try{let i=[],e=[];Object.values(pn).forEach(t=>{e.push(t.g,...t.caps)}),[xt.grp,Qe.pts,zt.mesh,en.im,Kn.im,...Pe.pieces.map(t=>t.g),...Object.values(_t).map(t=>t.g),...e].forEach(t=>{i.push([t,t.visible]),t.visible=!0}),a0(0,0),Dt.setRenderTarget(Qi.renderTarget1),Dt.compile(St,Mn),Dt.shadowMap.needsUpdate=!0,Dt.setRenderTarget(null),i.forEach(([t,n])=>{t.visible=n})}catch{}_t.N.g.visible=!1,pn.P.g.visible=!0,pn.P.sync(_t.N.g),mn.shadow.intensity=pn.P.sh,Ye.dist+=2.2,Ye.el+=.08,Ye.az-=.5,requestAnimationFrame(i=>{h0.t0=i,requestAnimationFrame(f0)}),Ve(.05,()=>document.documentElement.classList.add("ready")),oi(tn[0].shot,3.4,.1),Za.show(.6,1.6),Bv(.9,2.4),bs(0,.9),Ve(2.2,()=>{$i=!1}),window.__bloom=Ki,window.__grade=Ka,window.__intro={snd:()=>Je.isOn(),proj:i=>{let e=qt(i).project(Mn);return[+e.x.toFixed(2),+e.y.toFixed(2)]},go:Ii,swap:(i,e)=>Uc(i,e),hero:i=>{at.on=!1,at.then=null,dn.mesh.visible=!1,Vt.uScan.value=0,Object.values(pn).forEach(e=>{e.setKeep(0),e.g.visible=e.key===i,e.fade(e.key===i?1:0)}),ji=i,mn.shadow.intensity=pn[i].sh,ci=1e9},get cur(){return rn},get locked(){return $i},get now(){return je},dbg:()=>({flash:es,cam:Mn.position.toArray().map(i=>+i.toFixed(2)),tgt:Ye.tgt.toArray(),dist:Ye.dist,el:Ye.el,az:Ye.az,hero:ji,ns:ci,hs:at.on?[at.from,at.to,+Gc().toFixed(2)]:null,info:[Dt.info.render.calls,Dt.info.render.triangles],dpr:Zn,active:Ji,pos:Cs().g.position.toArray(),vis:Object.values(_t).map(i=>i.type+i.g.visible),cut:Object.values(_t).map(i=>i.mat.userData.D.uCut.value),cloud:Qe.pts.visible,bg:Yi.v,grid:[zt.on,zt.mesh.visible,zt.u.uOp.value,zt.u.uReveal.value]})}}Ey();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
