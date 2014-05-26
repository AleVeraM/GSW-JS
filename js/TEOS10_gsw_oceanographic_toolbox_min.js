var GSW_INVALID_VALUE=9E15;
function TEOS10_gsw_oceanographic_toolbox(){this.GSW_saar=new TEOS10_gsw_saar;this.GSW_T0=273.15;this.GSW_P0=101325;this.GSW_SSO=35.16504;this.GSW_uPS=1.0047154285714286;this.GSW_cp0=3991.86795711963;this.GSW_C3515=42.914;this.GSW_SonCl=1.80655;this.GSW_valence_factor=1.2452898;this.GSW_atomic_weight=31.4038218;this.db2pa=1E4;this.p0=101325;this.a0=-.01446013646344788;this.a1=-.003305308995852924;this.a2=1.062415929128982E-4;this.a3=.9477566673794487;this.a4=.002166591947736613;this.a5=.003828842955039902;
this.a01=2.839940833161907;this.a02=-.06295518531177023;this.a03=.003545416635222918;this.a04=-.02986498947203215;this.a05=4.655718814958324E-4;this.a06=5.0954225738805E-4;this.a07=-2.853969343267241E-5;this.a08=4.935118121048767E-7;this.a09=-3.43609007985188E-4;this.a10=7.452101440691467E-6;this.a11=6.876837219536232E-7;this.a12=-1.988366587925593E-8;this.a13=-2.123038140592916E-11;this.a14=.002775927747785646;this.a15=-4.69921488827185E-5;this.a16=3.35854007246023E-6;this.a17=2.697475730017109E-9;
this.a18=-2.764306979894411E-5;this.a19=2.525874630197091E-7;this.a20=2.858362524508931E-9;this.a21=-7.244588807799565E-11;this.a22=3.801564588876298E-7;this.a23=-1.534575373851809E-8;this.a24=-1.390254702334843E-10;this.a25=1.072438894227657E-11;this.a26=-3.212746477974189E-7;this.a27=6.382827821123254E-9;this.a28=-5.793038794625329E-12;this.a29=6.211426728363857E-10;this.a30=-1.941660213148725E-11;this.a31=-3.729652850731201E-14;this.a32=1.119522344879478E-14;this.a33=6.057902487546866E-17;this.b0=
1;this.b1=6.5060971156358E-4;this.b2=.003830289486850898;this.b3=1.247811760368034E-6;this.b01=-6.698001071123802;this.b02=-.02986498947203215;this.b03=2.327859407479162E-4;this.b04=-.05983233568452735;this.b05=7.64313386082075E-4;this.b06=-2.140477007450431E-5;this.b07=2.467559060524383E-7;this.b08=-1.806789763745328E-4;this.b09=6.876837219536232E-7;this.b10=1.55093272922008E-10;this.b11=-.007521448093615448;this.b12=-2.764306979894411E-5;this.b13=1.262937315098546E-7;this.b14=9.527875081696435E-10;
this.b15=-1.811147201949891E-11;this.b16=-4.954963307079632E-5;this.b17=5.702346883314446E-7;this.b18=-1.150931530388857E-8;this.b19=-6.951273511674217E-11;this.b20=4.021645853353715E-12;this.b21=1.083865310229748E-5;this.b22=-1.105097577149576E-7;this.b23=6.211426728363857E-10;this.b24=1.119522344879478E-14;this.c01=-.02233269627352527;this.c02=-3.43609007985188E-4;this.c03=3.726050720345733E-6;this.c04=-1.806789763745328E-4;this.c05=6.876837219536232E-7;this.c06=-6.174065000748422E-7;this.c07=-3.976733175851186E-8;
this.c08=-2.123038140592916E-11;this.c09=3.10186545844016E-10;this.c10=-2.742185394906099E-5;this.c11=-3.212746477974189E-7;this.c12=3.191413910561627E-9;this.c13=-1.931012931541776E-12;this.c14=-1.105097577149576E-7;this.c15=6.211426728363857E-10;this.c16=-2.238023185750219E-10;this.c17=-3.88332042629745E-11;this.c18=-3.729652850731201E-14;this.c19=2.239044689758956E-14;this.c20=-3.601523245654798E-15;this.c21=1.81737074626406E-16;this.v01=999.8420897506056;this.v02=2.839940833161907;this.v03=-.03147759265588511;
this.v04=.001181805545074306;this.v05=-6.698001071123802;this.v06=-.02986498947203215;this.v07=2.327859407479162E-4;this.v08=-.0398882237896849;this.v09=5.0954225738805E-4;this.v10=-1.426984671633621E-5;this.v11=1.645039373682922E-7;this.v12=-.02233269627352527;this.v13=-3.43609007985188E-4;this.v14=3.726050720345733E-6;this.v15=-1.806789763745328E-4;this.v16=6.876837219536232E-7;this.v17=-3.087032500374211E-7;this.v18=-1.988366587925593E-8;this.v19=-1.061519070296458E-11;this.v20=1.55093272922008E-10;
this.v21=1;this.v22=.002775927747785646;this.v23=-2.349607444135925E-5;this.v24=1.119513357486743E-6;this.v25=6.743689325042773E-10;this.v26=-.007521448093615448;this.v27=-2.764306979894411E-5;this.v28=1.262937315098546E-7;this.v29=9.527875081696435E-10;this.v30=-1.811147201949891E-11;this.v31=-3.303308871386421E-5;this.v32=3.801564588876298E-7;this.v33=-7.672876869259043E-9;this.v34=-4.634182341116144E-11;this.v35=2.681097235569143E-12;this.v36=5.41932655114874E-6;this.v37=-2.742185394906099E-5;
this.v38=-3.212746477974189E-7;this.v39=3.191413910561627E-9;this.v40=-1.931012931541776E-12;this.v41=-1.105097577149576E-7;this.v42=6.211426728363857E-10;this.v43=-1.11901159287511E-10;this.v44=-1.941660213148725E-11;this.v45=-1.8648264253656E-14;this.v46=1.119522344879478E-14;this.v47=-1.200507748551599E-15;this.v48=6.057902487546866E-17}
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sa_from_sp=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);if(a==GSW_INVALID_VALUE)return a;c=this.gsw_sa_from_sp_baltic(e,c,f);return 1E10>c?c:35.16504/35*e*(1+a)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sstar_from_sp=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);if(a==GSW_INVALID_VALUE)return a;c=this.gsw_sa_from_sp_baltic(e,c,f);return 1E10>c?c:35.16504/35*e*(1-.35*a)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_ct_from_t=function(e,a,c){a=this.gsw_pt0_from_t(e,a,c);return this.gsw_ct_from_pt(e,a)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_deltasa_from_sp=function(e,a,c,f){e=this.gsw_sa_from_sp(e,a,c,f)-this.gsw_sr_from_sp(e);1E10<e&&(e=GSW_INVALID_VALUE);return e};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sr_from_sp=function(e){e*=1.004715428571429;1E10<=e&&(e=9E15);return e};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sp_from_sr=function(e){e*=.995306702338459;1E10<e&&(e=GSW_INVALID_VALUE);return e};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sp_from_sa=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);if(a==GSW_INVALID_VALUE)return a;c=this.gsw_sp_from_sa_baltic(e,c,f);return 1E10>c?c:35/35.16504*e/(1+a)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sstar_from_sa=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);return a==GSW_INVALID_VALUE?a:e*(1-.35*a)/(1+a)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sa_from_sstar=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);return a==GSW_INVALID_VALUE?a:e*(1+a)/(1-.35*a)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sp_from_sstar=function(e,a,c,f){a=this.GSW_saar.gsw_saar(a,c,f);if(a==GSW_INVALID_VALUE)return a;c=this.gsw_sp_from_sa_baltic(e,c,f);return 1810>c?c:35/35.16504*e/(1-.35*a)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_t_from_ct=function(e,a,c){a=this.gsw_pt_from_ct(e,a);return this.gsw_pt_from_t(e,a,0,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_ct_from_pt=function(e,a){var c=.0248826675584615*e,f=Math.sqrt(c),d=.025*a;return(61.01362420681071+d*(168776.46138048015+d*(-2735.2785605119625+d*(2574.2164453821433+d*(-1536.6644434977543+d*(545.7340497931629+(-50.91091728474331-18.30489878927802*d)*d)))))+c*(268.5520265845071+d*(-12019.028203559312+d*(3734.858026725145+d*(-2046.7671145057618+d*(465.28655623826234+(-.6370820302376359-10.650848542359153*d)*d))))+f*(937.2099110620707+d*(588.1802812170108+
d*(248.39476522971285+(-3.871557904936333-2.6268019854268356*d)*d))+f*(-1687.914374187449+f*(246.9598888781377+f*(123.59576582457964-48.5891069025409*f))+d*(936.3206544460336+d*(-942.7827304544439+d*(369.4389437509002+(-33.83664947895248-9.987880382780322*d)*d)))))))/this.GSW_cp0};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_pt_from_t=function(e,a,c,f){var d="",b="",h="",d=this.GSW_SSO,h=35*e/d,b=a+(c-f)*(8.65483913395442E-6-1.41636299744881E-6*h-7.38286467135737E-9*(c+f)+a*(-8.38241357039698E-6+2.83933368585534E-8*h+1.77803965218656E-8*a+1.71155619208233E-10*(c+f))),g=this.GSW_cp0/((273.15+b)*(1-.05*(1-e/d)));a=this.gsw_entropy_part(e,a,c);for(c=1;2>=c;c++)d=b,h=this.gsw_entropy_part(e,d,f)-a,b=d-h/g,b=.5*(b+d),g=-1*this.gsw_gibbs(0,2,0,e,b,f),b=d-h/g;return b};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_pt0_from_t=function(e,a,c){var f="",d="",b="",f=this.GSW_SSO,b=35*e/f,d=a+c*(8.65483913395442E-6-1.41636299744881E-6*b-7.38286467135737E-9*c+a*(-8.38241357039698E-6+2.83933368585534E-8*b+1.77803965218656E-8*a+1.71155619208233E-10*c)),h=this.GSW_cp0/((273.15+d)*(1-.05*(1-e/f)));a=this.gsw_entropy_part(e,a,c);for(c=1;2>=c;c++)f=d,b=this.gsw_entropy_part_zerop(e,f)-a,d=f-b/h,d=.5*(d+f),h=-1*this.gsw_gibbs_pt0_pt0(e,d),d=f-b/h;return d};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_pt_from_ct=function(e,a){var c=this.GSW_cp0,f=35*e/35.16504,d=this.a5*a,b=this.b3*a,h=this.a3+this.a4*f+d,g=this.b0+this.b1*f+a*(this.b2+b),f=(this.a0+f*(this.a1+this.a2*f)+a*h)/g,b=g/(h+d-(this.b2+b+b)*f),d=this.gsw_ct_from_pt(e,f)-a,b=.5*(f-d/b+f),b=-1*(b+273.15)*this.gsw_gibbs_pt0_pt0(e,b)/c,f=f-d/b,d=this.gsw_ct_from_pt(e,f)-a;return f-d/b};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_rho=function(e,a,c){var f=Math.sqrt(e);return(this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+a*(this.v06+this.v07*a)+f*(this.v08+a*(this.v09+a*(this.v10+this.v11*a))))+c*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a)+c*(this.v17+a*(this.v18+this.v19*a)+this.v20*e)))/(this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+f*(this.v31+a*(this.v32+a*(this.v33+
a*(this.v34+this.v35*a)))))+c*(this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a)+c*(this.v43+a*(this.v44+this.v45*a+this.v46*e)+c*(this.v47+this.v48*a))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_alpha=function(e,a,c){var f=Math.sqrt(e),d=this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+f*(this.v31+a*(this.v32+a*(this.v33+a*(this.v34+this.v35*a)))))+c*(this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a)+c*(this.v43+a*(this.v44+this.v45*a+this.v46*e)+c*(this.v47+this.v48*a)));return(this.a14+a*(this.a15+a*(this.a16+this.a17*a))+e*(this.a18+a*(this.a19+
a*(this.a20+this.a21*a))+f*(this.a22+a*(this.a23+a*(this.a24+this.a25*a))))+c*(this.a26+a*(this.a27+this.a28*a)+this.a29*e+c*(this.a30+this.a31*a+this.a32*e+this.a33*c))-d/(this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+a*(this.v06+this.v07*a)+f*(this.v08+a*(this.v09+a*(this.v10+this.v11*a))))+c*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a)+c*(this.v17+a*(this.v18+this.v19*a)+this.v20*e)))*(this.a01+a*(this.a02+this.a03*a)+e*(this.a04+this.a05*a+f*(this.a06+a*(this.a07+this.a08*
a)))+c*(this.a09+this.a10*a+this.a11*e+c*(this.a12+this.a13*a))))/d};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_beta=function(e,a,c){var f=Math.sqrt(e),d=this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+f*(this.v31+a*(this.v32+a*(this.v33+a*(this.v34+this.v35*a)))))+c*(this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a)+c*(this.v43+a*(this.v44+this.v45*a+this.v46*e)+c*(this.v47+this.v48*a)));return(d/(this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+a*
(this.v06+this.v07*a)+f*(this.v08+a*(this.v09+a*(this.v10+this.v11*a))))+c*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a)+c*(this.v17+a*(this.v18+this.v19*a)+this.v20*e)))*(this.b01+a*(this.b02+this.b03*a)+f*(this.b04+a*(this.b05+a*(this.b06+this.b07*a)))+c*(this.b08+this.b09*a+this.b10*c))-(this.b11+a*(this.b12+a*(this.b13+a*(this.b14+this.b15*a)))+f*(this.b16+a*(this.b17+a*(this.b18+a*(this.b19+this.b20*a))))+this.b21*e+c*(this.b22+a*(this.b23+this.b24*c))))/d};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_specvol=function(e,a,c){return 1/this.gsw_rho(e,a,c)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_specvol_anom=function(e,a,c){return this.gsw_specvol(e,a,c)-this.gsw_specvol_sso_0_p(c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sound_speed=function(e,a,c){var f=Math.sqrt(e),d=this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+f*(this.v31+a*(this.v32+a*(this.v33+a*(this.v34+this.v35*a)))))+c*(this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a)+c*(this.v43+a*(this.v44+this.v45*a+this.v46*e)+c*(this.v47+this.v48*a)));return 100*Math.sqrt(d*d/((this.c01+a*(this.c02+this.c03*a)+e*(this.c04+
this.c05*a)+c*(this.c06+a*(this.c07+this.c08*a)+this.c09*e))*d-(this.c10+a*(this.c11+a*(this.c12+this.c13*a))+e*(this.c14+this.c15*a)+c*(this.c16+a*(this.c17+this.c18*a+this.c19*e)+c*(this.c20+this.c21*a)))*(this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+a*(this.v06+this.v07*a)+f*(this.v08+a*(this.v09+a*(this.v10+this.v11*a))))+c*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a)+c*(this.v17+a*(this.v18+this.v19*a)+this.v20*e)))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_internal_energy=function(e,a,c){return this.gsw_enthalpy(e,a,c)-(this.p0+this.db2pa*c)*this.gsw_specvol(e,a,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_enthalpy=function(e,a,c){var f=this.GSW_cp0,d=Math.sqrt(e),b=this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+d*(this.v31+a*(this.v32+a*(this.v33+a*(this.v34+this.v35*a))))),h=this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a),g=this.v43+a*(this.v44+this.v45*a+this.v46*e),k=this.v47+this.v48*a,d=this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+
a*(this.v06+this.v07*a)+d*(this.v08+a*(this.v09+a*(this.v10+this.v11*a)))),l=.5*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a));e=this.v17+a*(this.v18+this.v19*a)+this.v20*e;var n=l*l,p=Math.sqrt(n-d*e),h=h+(4*k*n/e-k*d-2*g*l)/e,n=l-p,p=l+p,b=((b+(2*k*d*l/e-g*d)/e)*e-h*l)/(e*(p-n));return f*a+this.db2pa*(c*(g-2*k*l/e+.5*k*c)/e+h/(2*e)*Math.log(1+c*(2*l+e*c)/d)+b*Math.log(1+e*c*(p-n)/(n*(p+e*c))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_dynamic_enthalpy=function(e,a,c){var f=Math.sqrt(e),d=this.v21+a*(this.v22+a*(this.v23+a*(this.v24+this.v25*a)))+e*(this.v26+a*(this.v27+a*(this.v28+a*(this.v29+this.v30*a)))+this.v36*e+f*(this.v31+a*(this.v32+a*(this.v33+a*(this.v34+this.v35*a))))),b=this.v37+a*(this.v38+a*(this.v39+this.v40*a))+e*(this.v41+this.v42*a),h=this.v43+a*(this.v44+this.v45*a+this.v46*e),g=this.v47+this.v48*a,f=this.v01+a*(this.v02+a*(this.v03+this.v04*a))+e*(this.v05+a*(this.v06+
this.v07*a)+f*(this.v08+a*(this.v09+a*(this.v10+this.v11*a)))),k=.5*(this.v12+a*(this.v13+this.v14*a)+e*(this.v15+this.v16*a));e=this.v17+a*(this.v18+this.v19*a)+this.v20*e;var l=k*k;a=Math.sqrt(l-f*e);b+=(4*g*l/e-g*f-2*h*k)/e;l=k-a;a=k+a;d=((d+(2*g*f*k/e-h*f)/e)*e-b*k)/(e*(a-l));return this.db2pa*(c*(h-2*g*k/e+.5*g*c)/e+b/(2*e)*Math.log(1+c*(2*k+e*c)/f)+d*Math.log(1+e*c*(a-l)/(l*(a+e*c))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_ct_freezing=function(e,a,c){var f=.01*e,d=Math.sqrt(f),b=1E-4*a;c=.017947064327968738+f*(-6.076099099929818+d*(4.883198653547851+d*(-11.88081601230542+d*(13.34658511480257+d*(-8.722761043208607+2.082038908808201*d)))))+b*(-7.389420998107497+b*(-2.110913185058476+.2295491578006229*b))+f*b*(-.9891538123307282+b*(.3831132432071728+b*(-.7997496801694032+.1338002171109174*f))+f*(1.054318231187074+-2.078616693017569*b+-2.079022768390933*f)+d*(-.08987150128406496+
b*(1.065556599652796+.8756340772729538*b)+f*(.3850133554097069+1.596435439942262*b+1.242891021876471*f)))-.001*c*(2.4-.014289763856964*e)*(1+.05700064989972*(1-e/35.16504));if(1E4<a||120<e||13571.42857142857<a+71.4285714285714*e)c=GSW_INVALID_VALUE;return c};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_t_freezing=function(e,a,c){c=this.gsw_ct_freezing(e,a,c);e=this.gsw_t_from_ct(e,c,a);9E10<c&&(e=GSW_INVALID_VALUE);return e};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_latentheat_melting=function(e,a){var c=Math.sqrt(e/(35.16504/35*40)),f=1E-4*a;return 333426.516924071+c*(-2.789444646733159+-73.7196652857192*f+c*(-4984.585692734338+f*(1233.720336206392+-1029.021448430547*f)+c*(1195.857305019339+f*(-1649.446955902331+f*(561.3896351265648+-642.0420579160927*f))+c*(-579.2068522727968+f*(1078.283734113611+-301.9749254648732*f)+c*(683.6527214265952+-577.5033277201674*f+-237.1103254714944*c)))))+f*(-18221.5015645335+f*(-7605.802553358546+
229.479867659189*c+f*(965.5751370889338+c*(-317.1558017172501+696.8934948667265*c)+f*(-175.1401389905041+c*(179.3032021946783+-265.7570848596042*c)+f*(86.92558481134256+-16.46738151143109*c+4.618228988300871*f)))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_latentheat_evap_ct=function(e,a){var c=Math.sqrt(e/(35.16504/35*40)),f=a/40;return 2499065.844825125+c*(-.1544590633515099+45.89984751248335*f+c*(166.5513670736+f*(-6631.757848479068+2519.335841663499*f)+c*(1192.559661490269+f*(743.7431482069087+f*(-639.9956483223386+751.0134932437941*f))+c*(-3148.710097513822+f*(1062.383995581363+-806.2279018001309*f)+c*(1213.387273240204+43.51585544019463*f+-203.1538422351553*c)))))+f*(-90968.00915831875+f*(18.94281502222415+
-110.4989199195898*c+f*(-1207.00648253233+c*(11.86568375570869+-1541.083032068263*c)+f*(573.1307337366114+c*(84.6078017563209+179.7443329095446*c)+f*(-323.3571307223379+-23.8985392874763*c+102.1046205356775*f)))))};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_latentheat_evap_t=function(e,a){var c=this.gsw_ct_from_pt(e,a);return this.gsw_latentheat_evap_ct(e,c)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_rho_t_exact=function(e,a,c){return 1/this.gsw_gibbs(0,0,1,e,a,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_pot_rho_t_exact=function(e,a,c,f){a=this.gsw_pt_from_t(e,a,c,f);return this.gsw_rho_t_exact(e,a,f)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_alpha_wrt_t_exact=function(e,a,c){return this.gsw_gibbs(0,1,1,e,a,c)/this.gsw_gibbs(0,0,1,e,a,c)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_beta_const_t_exact=function(e,a,c){return-1*this.gsw_gibbs(1,0,1,e,a,c)/this.gsw_gibbs(0,0,1,e,a,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_specvol_t_exact=function(e,a,c){return this.gsw_gibbs(0,0,1,e,a,c)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sound_speed_t_exact=function(e,a,c){var f=this.gsw_gibbs(0,2,0,e,a,c),d=this.gsw_gibbs(0,1,1,e,a,c);return this.gsw_gibbs(0,0,1,e,a,c)*Math.sqrt(f/(d*d-f*this.gsw_gibbs(0,0,2,e,a,c)))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_kappa_t_exact=function(e,a,c){var f=this.gsw_gibbs(0,2,0,e,a,c),d=this.gsw_gibbs(0,1,1,e,a,c);return(d*d-f*this.gsw_gibbs(0,0,2,e,a,c))/(this.gsw_gibbs(0,0,1,e,a,c)*f)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_enthalpy_t_exact=function(e,a,c){return this.gsw_gibbs(0,0,0,e,a,c)-(a+273.15)*this.gsw_gibbs(0,1,0,e,a,c)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_entropy_t_exact=function(e,a,c){return-1*this.gsw_gibbs(0,1,0,e,a,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_cp_t_exact=function(e,a,c){return-1*(a+273.15)*this.gsw_gibbs(0,2,0,e,a,c)};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_gibbs=function(e,a,c,f,d,b){var h=.0248826675584615*f,g=Math.sqrt(h);d*=.025;b*=1E-4;if(0==e&&0==a&&0==c){e=101.342743139674+b*(100015.695367145+b*(-2544.5765420363+b*(284.517778446287+b*(-33.3146754253611+(4.20263108803084-.546428511471039*b)*b))))+d*(5.90578347909402+b*(-270.983805184062+b*(776.153611613101+b*(-196.51255088122+(28.9796526294175-2.13290083518327*b)*b)))+d*(-12357.785933039+b*(1455.0364540468+b*(-756.558385769359+b*(273.479662323528+
b*(-55.5604063817218+4.34420671917197*b))))+d*(736.741204151612+b*(-672.50778314507+b*(499.360390819152+b*(-239.545330654412+(48.8012518593872-1.66307106208905*b)*b)))+d*(-148.185936433658+b*(397.968445406972+b*(-301.815380621876+(152.196371733841-26.3748377232802*b)*b))+d*(58.0259125842571+b*(-194.618310617595+b*(120.520654902025+b*(-55.2723052340152+6.48190668077221*b)))+d*(-18.9843846514172+d*(3.05081646487967-9.63108119393062*b)+b*(63.5113936641785+b*(-22.2897317140459+8.17060541818112*b))))))));
a=h*(1416.27648484197+b*(-3310.49154044839+b*(384.794152978599+b*(-96.5324320107458+(15.8408172766824-2.62480156590992*b)*b)))+g*(-2432.14662381794+g*(2025.80115603697+d*(543.835333000098+d*(-68.5572509204491+d*(49.3667694856254+d*(-17.1397577419788+2.49697009569508*d)))-22.6683558512829*b)+g*(-1091.66841042967-196.028306689776*d+g*(374.60123787784-48.5891069025409*g+36.7571622995805*d)+36.0284195611086*b)+b*(-54.7919133532887+(-4.08193978912261-30.1755111971161*b)*b))+b*(199.459603073901+b*(-52.2940909281335+
(68.0444942726459-3.41251932441282*b)*b))+d*(-493.407510141682+b*(-175.292041186547+(83.1923927801819-29.483064349429*b)*b)+d*(-43.0664675978042+b*(383.058066002476+b*(-54.1917262517112+25.6398487389914*b))+d*(-10.0227370861875-460.319931801257*b+d*(.875600661808945+234.565187611355*b)))))+d*(168.072408311545+b*(729.116529735046+b*(-343.956902961561+b*(124.687671116248+b*(-31.656964386073+7.04658803315449*b))))+d*(880.031352997204+d*(-225.267649263401+d*(91.4260447751259+d*(-21.6603240875311+2.13016970847183*
d)+b*(-297.728741987187+(74.726141138756-36.4872919001588*b)*b))+b*(694.244814133268+b*(-204.889641964903+(113.561697840594-11.1282734326413*b)*b)))+b*(-860.764303783977+b*(337.409530269367+b*(-178.314556207638+(44.2040358308-7.92001547211682*b)*b))))));0<f&&(a+=h*(5812.81456626732+851.226734946706*d)*Math.log(g));var k=e+a}else 1==e&&0==a&&0==c?(a=0<f?8645.36753595126+b*(-6620.98308089678+b*(769.588305957198+b*(-193.0648640214916+(31.6816345533648-5.24960313181984*b)*b)))+g*(-7296.43987145382+g*
(8103.20462414788+d*(2175.341332000392+d*(-274.2290036817964+d*(197.4670779425016+d*(-68.5590309679152+9.98788038278032*d)))-90.6734234051316*b)+g*(-5458.34205214835-980.14153344888*d+g*(2247.60742726704-340.1237483177863*g+220.542973797483*d)+180.142097805543*b)+b*(-219.1676534131548+(-16.32775915649044-120.7020447884644*b)*b))+b*(598.378809221703+b*(-156.8822727844005+(204.1334828179377-10.23755797323846*b)*b))+d*(-1480.222530425046+b*(-525.876123559641+(249.57717834054571-88.449193048287*b)*b)+
d*(-129.1994027934126+b*(1149.174198007428+b*(-162.5751787551336+76.9195462169742*b))+d*(-30.0682112585625-1380.9597954037708*b+d*(2.626801985426835+703.695562834065*b)))))+d*(1187.3715515697959+b*(1458.233059470092+b*(-687.913805923122+b*(249.375342232496+b*(-63.313928772146+14.09317606630898*b))))+d*(1760.062705994408+d*(-450.535298526802+d*(182.8520895502518+d*(-43.3206481750622+4.26033941694366*d)+b*(-595.457483974374+(149.452282277512-72.9745838003176*b)*b))+b*(1388.489628266536+b*(-409.779283929806+
(227.123395681188-22.2565468652826*b)*b)))+b*(-1721.528607567954+b*(674.819060538734+b*(-356.629112415276+(88.4080716616-15.84003094423364*b)*b)))))+(11625.62913253464+1702.453469893412*d)*Math.log(g):0,k=.01244133377923075*a):0==e&&1==a&&0==c?(e=5.90578347909402+b*(-270.983805184062+b*(776.153611613101+b*(-196.51255088122+(28.9796526294175-2.13290083518327*b)*b)))+d*(-24715.571866078+b*(2910.0729080936+b*(-1513.116771538718+b*(546.959324647056+b*(-111.1208127634436+8.68841343834394*b))))+d*(2210.2236124548363+
b*(-2017.52334943521+b*(1498.081172457456+b*(-718.6359919632359+(146.4037555781616-4.9892131862671505*b)*b)))+d*(-592.743745734632+b*(1591.873781627888+b*(-1207.261522487504+(608.785486935364-105.4993508931208*b)*b))+d*(290.12956292128547+b*(-973.091553087975+b*(602.603274510125+b*(-276.361526170076+32.40953340386105*b)))+d*(-113.90630790850321+d*(21.35571525415769-67.41756835751434*b)+b*(381.06836198507096+b*(-133.7383902842754+49.023632509086724*b))))))),a=h*(168.072408311545+b*(729.116529735046+
b*(-343.956902961561+b*(124.687671116248+b*(-31.656964386073+7.04658803315449*b))))+g*(-493.407510141682+g*(543.835333000098+g*(-196.028306689776+36.7571622995805*g)+d*(-137.1145018408982+d*(148.10030845687618+d*(-68.5590309679152+12.4848504784754*d)))-22.6683558512829*b)+b*(-175.292041186547+(83.1923927801819-29.483064349429*b)*b)+d*(-86.1329351956084+b*(766.116132004952+b*(-108.3834525034224+51.2796974779828*b))+d*(-30.0682112585625-1380.9597954037708*b+d*(3.50240264723578+938.26075044542*b))))+
d*(1760.062705994408+d*(-675.802947790203+d*(365.7041791005036+d*(-108.30162043765552+12.78101825083098*d)+b*(-1190.914967948748+(298.904564555024-145.9491676006352*b)*b))+b*(2082.7344423998043+b*(-614.668925894709+(340.685093521782-33.3848202979239*b)*b)))+b*(-1721.528607567954+b*(674.819060538734+b*(-356.629112415276+(88.4080716616-15.84003094423364*b)*b))))),0<f&&(a+=851.226734946706*h*Math.log(g)),k=.025*(e+a)):0==e&&0==a&&1==c?k=1E-8*(100015.695367145+b*(-5089.1530840726+b*(853.5533353388611+
b*(-133.2587017014444+(21.0131554401542-3.278571068826234*b)*b)))+d*(-270.983805184062+b*(1552.307223226202+b*(-589.53765264366+(115.91861051767-10.664504175916349*b)*b))+d*(1455.0364540468+b*(-1513.116771538718+b*(820.438986970584+b*(-222.2416255268872+21.72103359585985*b)))+d*(-672.50778314507+b*(998.720781638304+b*(-718.6359919632359+(195.2050074375488-8.31535531044525*b)*b))+d*(397.968445406972+b*(-603.630761243752+(456.589115201523-105.4993508931208*b)*b)+d*(-194.618310617595+d*(63.5113936641785-
9.63108119393062*d+b*(-44.5794634280918+24.511816254543362*b))+b*(241.04130980405+b*(-165.8169157020456+25.92762672308884*b)))))))+h*(-3310.49154044839+b*(769.588305957198+b*(-289.5972960322374+(63.3632691067296-13.1240078295496*b)*b))+g*(199.459603073901+g*(-54.7919133532887+36.0284195611086*g-22.6683558512829*d+(-8.16387957824522-90.52653359134831*b)*b)+b*(-104.588181856267+(204.1334828179377-13.65007729765128*b)*b)+d*(-175.292041186547+(166.3847855603638-88.449193048287*b)*b+d*(383.058066002476+
d*(-460.319931801257+234.565187611355*d)+b*(-108.3834525034224+76.9195462169742*b))))+d*(729.116529735046+b*(-687.913805923122+b*(374.063013348744+b*(-126.627857544292+35.23294016577245*b)))+d*(-860.764303783977+d*(694.244814133268+d*(-297.728741987187+(149.452282277512-109.46187570047641*b)*b)+b*(-409.779283929806+(340.685093521782-44.5130937305652*b)*b))+b*(674.819060538734+b*(-534.943668622914+(176.8161433232-39.600077360584095*b)*b)))))):0==e&&2==a&&0==c?k=6.25E-4*(-24715.571866078+b*(2910.0729080936+
b*(-1513.116771538718+b*(546.959324647056+b*(-111.1208127634436+8.68841343834394*b))))+d*(4420.4472249096725+b*(-4035.04669887042+b*(2996.162344914912+b*(-1437.2719839264719+(292.8075111563232-9.978426372534301*b)*b)))+d*(-1778.231237203896+b*(4775.621344883664+b*(-3621.784567462512+(1826.356460806092-316.49805267936244*b)*b))+d*(1160.5182516851419+b*(-3892.3662123519+b*(2410.4130980405+b*(-1105.446104680304+129.6381336154442*b)))+d*(-569.531539542516+d*(128.13429152494615-404.50541014508605*b)+b*
(1905.341809925355+b*(-668.691951421377+245.11816254543362*b))))))+h*(1760.062705994408+g*(-86.1329351956084+g*(-137.1145018408982+d*(296.20061691375236+d*(-205.67709290374563+49.9394019139016*d)))+b*(766.116132004952+b*(-108.3834525034224+51.2796974779828*b))+d*(-60.136422517125-2761.9195908075417*b+d*(10.50720794170734+2814.78225133626*b)))+d*(-1351.605895580406+d*(1097.1125373015109+d*(-433.20648175062206+63.905091254154904*d)+b*(-3572.7449038462437+(896.713693665072-437.84750280190565*b)*b))+
b*(4165.4688847996085+b*(-1229.337851789418+(681.370187043564-66.7696405958478*b)*b)))+b*(-1721.528607567954+b*(674.819060538734+b*(-356.629112415276+(88.4080716616-15.84003094423364*b)*b))))):1==e&&0==a&&1==c?k=1.244133377923075E-10*(-6620.98308089678+b*(1539.176611914396+b*(-579.1945920644748+(126.7265382134592-26.2480156590992*b)*b))+g*(598.378809221703+g*(-219.1676534131548+180.142097805543*g-90.6734234051316*d+(-32.65551831298088-362.10613436539325*b)*b)+b*(-313.764545568801+(612.4004484538132-
40.95023189295384*b)*b)+d*(-525.876123559641+(499.15435668109143-265.347579144861*b)*b+d*(1149.174198007428+d*(-1380.9597954037708+703.695562834065*d)+b*(-325.1503575102672+230.7586386509226*b))))+d*(1458.233059470092+b*(-1375.827611846244+b*(748.126026697488+b*(-253.255715088584+70.4658803315449*b)))+d*(-1721.528607567954+d*(1388.489628266536+d*(-595.457483974374+(298.904564555024-218.92375140095282*b)*b)+b*(-819.558567859612+(681.370187043564-89.0261874611304*b)*b))+b*(1349.638121077468+b*(-1069.887337245828+
(353.6322866464-79.20015472116819*b)*b))))):0==e&&1==a&&1==c?k=2.5E-10*(-270.983805184062+b*(1552.307223226202+b*(-589.53765264366+(115.91861051767-10.664504175916349*b)*b))+d*(2910.0729080936+b*(-3026.233543077436+b*(1640.877973941168+b*(-444.4832510537744+43.4420671917197*b)))+d*(-2017.52334943521+b*(2996.162344914912+b*(-2155.907975889708+(585.6150223126464-24.946065931335752*b)*b))+d*(1591.873781627888+b*(-2414.523044975008+(1826.356460806092-421.9974035724832*b)*b)+d*(-973.091553087975+b*(1205.20654902025+
b*(-829.084578510228+129.6381336154442*b))+d*(381.06836198507096-67.41756835751434*d+b*(-267.4767805685508+147.07089752726017*b))))))+h*(729.116529735046+b*(-687.913805923122+b*(374.063013348744+b*(-126.627857544292+35.23294016577245*b)))+g*(-175.292041186547-22.6683558512829*g+(166.3847855603638-88.449193048287*b)*b+d*(766.116132004952+d*(-1380.9597954037708+938.26075044542*d)+b*(-216.7669050068448+153.8390924339484*b)))+d*(-1721.528607567954+d*(2082.7344423998043+d*(-1190.914967948748+(597.809129110048-
437.84750280190565*b)*b)+b*(-1229.337851789418+(1022.055280565346-133.5392811916956*b)*b))+b*(1349.638121077468+b*(-1069.887337245828+(353.6322866464-79.20015472116819*b)*b))))):0==e&&0==a&&2==c&&(k=1E-16*(-5089.1530840726+b*(1707.1066706777221+b*(-399.7761051043332+(84.0526217606168-16.39285534413117*b)*b))+d*(1552.307223226202+b*(-1179.07530528732+(347.75583155301-42.658016703665396*b)*b)+d*(-1513.116771538718+b*(1640.877973941168+b*(-666.7248765806615+86.8841343834394*b))+d*(998.720781638304+b*
(-1437.2719839264719+(585.6150223126464-33.261421241781*b)*b)+d*(-603.630761243752+(913.178230403046-316.49805267936244*b)*b+d*(241.04130980405+d*(-44.5794634280918+49.023632509086724*b)+b*(-331.6338314040912+77.78288016926652*b))))))+h*(769.588305957198+b*(-579.1945920644748+(190.08980732018878-52.4960313181984*b)*b)+g*(-104.588181856267+g*(-8.16387957824522-181.05306718269662*b)+(408.2669656358754-40.95023189295384*b)*b+d*(166.3847855603638-176.898386096574*b+d*(-108.3834525034224+153.8390924339484*
b)))+d*(-687.913805923122+b*(748.126026697488+b*(-379.883572632876+140.9317606630898*b))+d*(674.819060538734+b*(-1069.887337245828+(530.4484299696-158.40030944233638*b)*b)+d*(-409.779283929806+d*(149.452282277512-218.92375140095282*b)+(681.370187043564-133.5392811916956*b)*b))))));return k};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_add_barrier=function(e,a,c,f,d,b,h,g){var k="",l=[260,272.59,276.5,278.65,280.73,292],n=[19.55,13.97,9.6,8.1,9.33,3.4],p=[],m=this.gsw_indx(l,6,a);a=(a-l[m])/(l[m+1]-l[m]);m=n[m]+a*(n[m+1]-n[m]);m<=c?k=1:k=0;m=this.gsw_indx(l,6,f);a=(f-l[m])/(l[m+1]-l[m]);m=n[m]+a*(n[m+1]-n[m]);p[0]=m<=d;p[3]=m<=d+h;m=this.gsw_indx(l,6,f+b);a=(f+b-l[m])/(l[m+1]-l[m]);m=n[m]+a*(n[m+1]-n[m]);p[1]=m<=d;p[2]=m<=d+h;for(d=f=c=0;4>d;d++)100>=Math.abs(e[d])&&k==p[d]&&(c+=1,
f+=e[d]);f=0==c?0:f/c;for(d=0;4>d;d++)1E10<=Math.abs(e[d])||k!=p[d]?g[d]=f:g[d]=e[d]};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_add_mean=function(e,a,c,f){for(var d=c=a=0;4>d;d++)100>=Math.abs(e[d])&&(a++,c+=e[d]);c=0==a?0:c/a;for(d=0;4>d;d++)100<=Math.abs(e[d])?f[d]=c:f[d]=e[d]};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_xinterp1=function(e,a,c,f){c=this.gsw_indx(e,c,f);return a[c]+(f-e[c])/(e[c+1]-e[c])*(a[c+1]-a[c])};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_indx=function(e,a,c){var f="",d=f="",b="";if(c>e[0]&&c<e[a-1]){d=0;for(f=a-1;1<f-d;)b=f+d>>1,c>e[b]?d=b:f=b;f=d;c==e[f+1]&&f++}else if(c<=e[0])f=0;else if(c>=e[a-1])f=a-2;else{msg="ERROR in this.gsw_indx : out of range\n";meta=sprintf("z = %g, n = %d, x:\n",c,a);level=E_RECOVERABLE_ERROR;trigger_error(msg.meta,level);for(d=0;d<a;d++)msg=sprintf("x[%d] = %g\n",d,e[d]),trigger_error(msg,level);f=0}return f};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_fdelta=function(e,a,c){e=this.GSW_saar.gsw_saar(e,a,c);a=1.35*e/(1-.35*e);return a=1E10<e?GSW_INVALID_VALUE:1.35*e/(1-.35*e)};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sa_from_sp_baltic=function(e,a,c){var f="",d=[12.6,7,26],b=[50,59,69],f=[45,26],h=[50,69];d[1]<a&&a<f[0]&&b[0]<c&&c<b[2]?(d=this.gsw_xinterp1(b,d,3,c),c=this.gsw_xinterp1(h,f,2,c),f=d<=a&&a<=c?(35.16504-.087)/35*e+.087:GSW_INVALID_VALUE):f=GSW_INVALID_VALUE;return f};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_sp_from_sa_baltic=function(e,a,c){var f="",d=[12.6,7,26],b=[50,59,69],f=[45,26],h=[50,69];d[1]<a&&a<f[0]&&b[0]<c&&c<b[2]?(d=this.gsw_xinterp1(b,d,3,c),c=this.gsw_xinterp1(h,f,2,c),f=d<=a&&a<=c?35/(35.16504-.087)*(e-.087):GSW_INVALID_VALUE):f=GSW_INVALID_VALUE;return f};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_entropy_part=function(e,a,c){e*=.0248826675584615;var f=Math.sqrt(e);a*=.025;c*=1E-4;return-.025*(c*(-270.983805184062+c*(776.153611613101+c*(-196.51255088122+(28.9796526294175-2.13290083518327*c)*c)))+a*(-24715.571866078+c*(2910.0729080936+c*(-1513.116771538718+c*(546.959324647056+c*(-111.1208127634436+8.68841343834394*c))))+a*(2210.2236124548363+c*(-2017.52334943521+c*(1498.081172457456+c*(-718.6359919632359+(146.4037555781616-4.9892131862671505*c)*
c)))+a*(-592.743745734632+c*(1591.873781627888+c*(-1207.261522487504+(608.785486935364-105.4993508931208*c)*c))+a*(290.12956292128547+c*(-973.091553087975+c*(602.603274510125+c*(-276.361526170076+32.40953340386105*c)))+a*(-113.90630790850321+a*(21.35571525415769-67.41756835751434*c)+c*(381.06836198507096+c*(-133.7383902842754+49.023632509086724*c)))))))+e*(c*(729.116529735046+c*(-343.956902961561+c*(124.687671116248+c*(-31.656964386073+7.04658803315449*c))))+f*(f*(a*(-137.1145018408982+a*(148.10030845687618+
a*(-68.5590309679152+12.4848504784754*a)))-22.6683558512829*c)+c*(-175.292041186547+(83.1923927801819-29.483064349429*c)*c)+a*(-86.1329351956084+c*(766.116132004952+c*(-108.3834525034224+51.2796974779828*c))+a*(-30.0682112585625-1380.9597954037708*c+a*(3.50240264723578+938.26075044542*c))))+a*(1760.062705994408+a*(-675.802947790203+a*(365.7041791005036+a*(-108.30162043765552+12.78101825083098*a)+c*(-1190.914967948748+(298.904564555024-145.9491676006352*c)*c))+c*(2082.7344423998043+c*(-614.668925894709+
(340.685093521782-33.3848202979239*c)*c)))+c*(-1721.528607567954+c*(674.819060538734+c*(-356.629112415276+(88.4080716616-15.84003094423364*c)*c))))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_entropy_part_zerop=function(e,a){var c=.0248826675584615*e,f=Math.sqrt(c),d=.025*a;return-.025*(d*(-24715.571866078+d*(2210.2236124548363+d*(-592.743745734632+d*(290.12956292128547+d*(-113.90630790850321+21.35571525415769*d)))))+c*(f*(f*d*(-137.1145018408982+d*(148.10030845687618+d*(-68.5590309679152+12.4848504784754*d)))+d*(-86.1329351956084+d*(-30.0682112585625+3.50240264723578*d)))+d*(1760.062705994408+d*(-675.802947790203+d*(365.7041791005036+d*(-108.30162043765552+
12.78101825083098*d))))))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_gibbs_pt0_pt0=function(e,a){var c=.0248826675584615*e,f=Math.sqrt(c),d=.025*a;return 6.25E-4*(-24715.571866078+d*(4420.4472249096725+d*(-1778.231237203896+d*(1160.5182516851419+d*(-569.531539542516+128.13429152494615*d))))+c*(1760.062705994408+f*(-86.1329351956084+f*(-137.1145018408982+d*(296.20061691375236+d*(-205.67709290374563+49.9394019139016*d)))+d*(-60.136422517125+10.50720794170734*d))+d*(-1351.605895580406+d*(1097.1125373015109+d*(-433.20648175062206+
63.905091254154904*d)))))};TEOS10_gsw_oceanographic_toolbox.prototype.gsw_specvol_sso_0_p=function(e){return(this.v21+35.16504*(this.v26+35.16504*this.v36+5.930011804372737*this.v31)+e*(this.v37+35.16504*this.v41+e*(this.v43+this.v47*e)))/(this.v01+35.16504*(this.v05+5.930011804372737*this.v08)+e*(this.v12+35.16504*this.v15+e*(this.v17+35.16504*this.v20)))};
TEOS10_gsw_oceanographic_toolbox.prototype.gsw_hill_ratio_at_sp2=function(e){var a=1.00024*e;e=(a-15)/(1+.0162*(a-15));var a=.2641463563366498+a*(2.007883247811176E-4+a*(-4.107694432853053E-6+a*(8.401670882091225E-8+a*(-1.71139202198921E-9+a*(3.37419389337738E-11+a*(-5.923731174730784E-13+a*(8.057771569962298E-15+a*(-7.054313817447962E-17+2.859992717347235E-19*a)))))))),c=.008+(-.1692+(25.3851+(14.0941+(-7.0261+2.7081*a)*a)*a)*a)*a+e*(5E-4+(-.0056+(-.0066+(-.0375+(.0636+-.0144*a)*a)*a)*a)*a),f=a-
(c-2)/(-.1692+(50.7702+(42.2823+(-28.1044+13.5405*a)*a)*a)*a+e*(-.0056+(-.0132+(3*-.0375+(.2544+-.072*a)*a)*a)*a)),f=.5*(f+a),f=a-(c-2)/(-.1692+(50.7702+(42.2823+(-28.1044+13.5405*f)*f)*f)*f+e*(-.0056+(-.0132+(3*-.0375+(.2544+-.072*f)*f)*f)*f)),a=400*f*f,c=10*f;return 2/(2-.008/(1+a*(1.5+a))-5E-4*e/(1+c*(1+c*(1+c))))};