import{j as H}from"./App.DfJ8oA_m.js";import{r as C}from"./index.DX2FeEyA.js";import{M as I,O as ie,B as se,F as Y,S as k,U as G,V as T,W as L,H as z,N as ae,T as re,C as V,a as M,A as oe,b as ne,R as le,c as ue,d as he,L as ce,e as fe,f as de,g as ee,h as me,i as pe,j as ge,k as ve,l as be,m as xe,n as we,P as ye,G as Te,o as Me,D as Se,p as Ce,q as _e,r as Pe,s as _,t as Re,u as Ae,Q as U,E as ke}from"./three.module.BwsCMrp9.js";const O={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class B{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ee=new ie(-1,1,1,-1,0,1);class De extends se{constructor(){super(),this.setAttribute("position",new Y([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Y([0,2,0,0,2,0],2))}}const Be=new De;class Q{constructor(e){this._mesh=new I(Be,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ee)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Fe extends B{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof k?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=G.clone(e.uniforms),this.material=new k({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Q(this.material)}render(e,i,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class K extends B{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,t){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,n;this.inverse?(o=0,n=1):(o=1,n=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,o,4294967295),s.buffers.stencil.setClear(n),s.buffers.stencil.setLocked(!0),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class Ie extends B{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Le{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const t=e.getSize(new T);this._width=t.width,this._height=t.height,i=new L(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:z}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fe(O),this.copyPass.material.blending=ae,this.timer=new re}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let t=!1;for(let a=0,s=this.passes.length;a<s;a++){const o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,t),o.needsSwap){if(t){const n=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}K!==void 0&&(o instanceof K?t=!0:o instanceof Ie&&(t=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new T);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const t=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(t,a),this.renderTarget2.setSize(t,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(t,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ze extends B{constructor(e,i,t=null,a=null,s=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=t,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,i,t){const a=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:t),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=a}}const Ue={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class D extends B{constructor(e,i=1,t,a){super(),this.strength=i,this.radius=t,this.threshold=a,this.resolution=e!==void 0?new T(e.x,e.y):new T(256,256),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new L(s,o,{type:z}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new L(s,o,{type:z});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const v=new L(s,o,{type:z});v.texture.name="UnrealBloomPass.v"+f,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),s=Math.round(s/2),o=Math.round(o/2)}const n=Ue;this.highPassUniforms=G.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new k({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new T(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=G.clone(O.uniforms),this.blendMaterial=new k({uniforms:this.copyUniforms,vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,premultipliedAlpha:!0,blending:oe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new ne,this._fsQuad=new Q(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let t=Math.round(e/2),a=Math.round(i/2);this.renderTargetBright.setSize(t,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(t,a),this.renderTargetsVertical[s].setSize(t,a),this.separableBlurMaterials[s].uniforms.invSize.value=new T(1/t,1/a),t=Math.round(t/2),a=Math.round(a/2)}render(e,i,t,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=t.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=t.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[l].uniforms.direction.value=D.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=D.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const i=[],t=e/3;for(let a=0;a<e;a++)i.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new k({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new T(.5,.5)},direction:{value:new T(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new k({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}D.BlurDirectionX=new T(1,0);D.BlurDirectionY=new T(0,1);const N={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ne extends B{constructor(){super(),this.isOutputPass=!0,this.uniforms=G.clone(N.uniforms),this.material=new le({name:N.name,uniforms:this.uniforms,vertexShader:N.vertexShader,fragmentShader:N.fragmentShader}),this._fsQuad=new Q(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ce?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fe?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===de?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ee?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===me?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pe?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ge&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const F=new M;function y(r,e,i,t,a,s){const o=2*Math.PI*a/4,n=Math.max(s-2*a,0),l=Math.PI/4;F.copy(e),F[t]=0,F.normalize();const u=.5*o/(o+n),f=1-F.angleTo(r)/l;return Math.sign(F[i])===1?f*u:n/(o+n)+u+u*(1-f)}class q extends ve{constructor(e=1,i=1,t=1,a=2,s=.1){const o=a*2+1;if(s=Math.min(e/2,i/2,t/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:t,segments:a,radius:s},o===1)return;const n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;const l=new M,u=new M,f=new M(e,i,t).divideScalar(2).subScalar(s),d=this.attributes.position.array,v=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,c=new M,b=.5/o;for(let p=0,x=0;p<d.length;p+=3,x+=2)switch(l.fromArray(d,p),u.copy(l),u.x-=Math.sign(u.x)*b,u.y-=Math.sign(u.y)*b,u.z-=Math.sign(u.z)*b,u.normalize(),d[p+0]=f.x*Math.sign(l.x)+u.x*s,d[p+1]=f.y*Math.sign(l.y)+u.y*s,d[p+2]=f.z*Math.sign(l.z)+u.z*s,v[p+0]=u.x,v[p+1]=u.y,v[p+2]=u.z,Math.floor(p/m)){case 0:c.set(1,0,0),h[x+0]=y(c,u,"z","y",s,t),h[x+1]=1-y(c,u,"y","z",s,i);break;case 1:c.set(-1,0,0),h[x+0]=1-y(c,u,"z","y",s,t),h[x+1]=1-y(c,u,"y","z",s,i);break;case 2:c.set(0,1,0),h[x+0]=1-y(c,u,"x","z",s,e),h[x+1]=y(c,u,"z","x",s,t);break;case 3:c.set(0,-1,0),h[x+0]=1-y(c,u,"x","z",s,e),h[x+1]=1-y(c,u,"z","x",s,t);break;case 4:c.set(0,0,1),h[x+0]=1-y(c,u,"x","y",s,e),h[x+1]=1-y(c,u,"y","x",s,i);break;case 5:c.set(0,0,-1),h[x+0]=y(c,u,"x","y",s,e),h[x+1]=1-y(c,u,"y","x",s,i);break}}static fromJSON(e){return new q(e.width,e.height,e.depth,e.segments,e.radius)}}const $=`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,W=`
precision highp float;
varying vec2 vUv;
uniform float uTime,uFoil,uGlitter,uGloss,uRelief,uDensity,uAngle,uStyle,uProtection,uBrightness,uFrame;
uniform float uScale,uDepth,uBgDepth,uAnimated;
uniform float uIntegration,uRim,uDecoration;
uniform vec2 uOffset;
uniform vec3 uView;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
mat2 turn(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
vec3 spectral(float p){return .56+.44*cos(6.283185*(p+vec3(0.,.33,.67)));}
vec2 parallax(vec2 uv,float depth){return uv+uView.xy/max(abs(uView.z),.42)*depth*.18;}
vec2 cells(vec2 p){vec2 id=floor(p),f=fract(p);float dist=8.;float seed=0.;
for(int y=-1;y<=1;y++){for(int x=-1;x<=1;x++){vec2 g=vec2(float(x),float(y));vec2 o=vec2(hash(id+g),hash(id+g+19.7));float d=length(g+o-f);if(d<dist){dist=d;seed=hash(id+g+7.1);}}}return vec2(dist,seed);}
float pattern(vec2 uv){
 vec2 p=turn(uAngle)*uv;float n=noise(uv*7.);
 if(uStyle<.5)return .5+sin(p.x*94.+n*2.)*.12;
 if(uStyle<1.5)return noise(uv*18.+noise(uv*4.)*3.);
 if(uStyle<2.5)return cells(uv*mix(12.,26.,uDensity)).y;
 if(uStyle<3.5)return noise(uv*36.)*.65+noise(uv*9.)*.35;
 if(uStyle<4.5)return .5+sin(p.x*82.)*sin(p.y*82.)*.22;
 return noise(vec2(p.x*700.,p.y*6.));
}
vec3 foilColor(vec2 uv,float pat){
 vec2 p=turn(uAngle)*uv;
 float phase=p.x*.76-p.y*.24+dot(uView.xy,vec2(.85,.52))+pat*.07;
 vec3 rainbow=spectral(phase);
 if(uStyle<.5)return rainbow;
 if(uStyle<1.5)return mix(vec3(.94,.82,.8),spectral(phase*.65+pat*.12),.22);
 if(uStyle<2.5)return mix(vec3(.58,.76,.84),spectral(phase+pat*.3),.42);
 if(uStyle<3.5)return mix(vec3(.56,.67,.83),spectral(phase+pat*.12),.6);
 if(uStyle<4.5)return mix(vec3(.59,.43,.22),vec3(.94,.81,.53),.5+.5*sin(phase*6.28));
 return mix(vec3(.48,.61,.73),vec3(.82,.89,.95),pat*.35+.4);
}
float microflakes(vec2 uv){
 vec2 p=uv*vec2(1.,1.5)*mix(100.,210.,uDensity),id=floor(p);
 vec2 f=fract(p)-mix(vec2(.22),vec2(.78),vec2(hash(id+3.7),hash(id+11.3)));
 float r=hash(id),phase=r*6.28+dot(uView.xy,vec2(8.,6.));
 float flash=pow(.5+.5*sin(phase+uTime*.16*uAnimated),8.);
 // Integrate subpixel flecks so tilting and small viewports do not produce hard sparkles.
 float footprint=max(length(fwidth(p))*.55,.07),radius=mix(.11,.2,hash(id+23.));
 float grain=exp(-dot(f,f)/pow(radius+footprint,2.))*radius*radius/pow(radius+footprint,2.);
 return grain*flash*smoothstep(.58,.85,r);
}
float starflakes(vec2 uv){
 vec2 p=uv*vec2(34.,51.),id=floor(p),f=fract(p)-.5;
 float seed=hash(id+41.);float aa=max(length(fwidth(p))*.4,.035);
 float core=exp(-dot(f,f)/pow(.035+aa,2.))*.035/(.035+aa);
 float cross=exp(-abs(f.x)/(.015+aa)-abs(f.y)*18.)+exp(-abs(f.y)/(.015+aa)-abs(f.x)*18.);
 float phase=seed*6.28+dot(uView.xy,vec2(11.,-7.))+uTime*.24*uAnimated;
 return (core+cross*.16)*pow(.5+.5*sin(phase),14.)*step(.965,seed);
}
vec3 finishSurface(vec2 uv,vec3 base,float subjectMask,float line){
 float pat=pattern(uv);vec3 foil=foilColor(uv,pat);
 vec2 view=uView.xy/max(abs(uView.z),.45);vec2 p=turn(uAngle)*(uv-.5);
 float reliefNormal=(pat-.5)*uRelief*.025;
 float band=exp(-pow((p.x-view.x*.48+view.y*.28+reliefNormal)*4.3,2.));
 float second=exp(-pow((p.x+p.y*.18+view.x*.32-.4)*6.2,2.));
 float ribbon=exp(-pow((p.x+p.y*.22+view.x*.55-view.y*.27-.19)*16.,2.));
 float fresnel=pow(1.-abs(uView.z),2.);
 float protect=1.-subjectMask*mix(.3,.96,uProtection);
 float coverage=(.065+band*.52+second*.2+fresnel*.2)*uFoil*protect;
 vec3 col=base*mix(vec3(1.),vec3(.72)+foil*.46,clamp(coverage,0.,.65));
 // Share the remaining highlight headroom across foil, coating and flecks.
 vec3 headroom=max(vec3(0.),vec3(1.)-base);
 float incidence=.62+.38*smoothstep(.02,.65,length(view));
 float emboss=1.+(pat-.5)*uRelief*.3;
 float satin=uStyle<.5?1.:uStyle<1.5?1.48:uStyle<2.5?1.18:uStyle<3.5?.76:uStyle<4.5?1.24:1.6;
 col+=headroom*foil*(band*.64+second*.16+ribbon*.26)*incidence*emboss*satin*uFoil*protect;
 // Structured facets and diffraction stay bonded to the card as the light moves.
 float facets=uStyle>1.5&&uStyle<2.5?pow(pat,3.)*.25:uStyle>3.5&&uStyle<4.5?pow(pat,2.)*.13:.035;
 col+=headroom*foil*facets*(.25+band)*uRelief*uFoil*protect;
 vec2 spot=turn(-.5)*(uv-vec2(.27,.75)-view*.48);
 float coat=exp(-dot(spot*vec2(3.2,1.5),spot*vec2(3.2,1.5)));
 // Clear UV coating is independent of rainbow protection: portraits retain
 // their ink colors while sharing the same softbox reflection as the card.
 float clearProtect=mix(1.,.34,subjectMask*uProtection);
 col+=headroom*vec3(.88,.94,1.)*(coat*.2+ribbon*.12+fresnel*.075)*uGloss*clearProtect;
 col+=headroom*line*uRelief*mix(foil,vec3(1.),.5)*(.05+band*.17)*uGloss;
 float spark=(microflakes(uv)*2.8+starflakes(uv)*1.6)*uGlitter*(.28+band*.95)*protect;
 col+=headroom*mix(foil,vec3(1.),.68)*spark;
 float grain=(noise(uv*vec2(720.,1080.))-.5)*.008;
 col+=grain*uFoil*protect;
 vec2 q=abs((uv-.5)*vec2(1.,1.5))-vec2(.483,.733);
 float edge=-(length(max(q,0.))+min(max(q.x,q.y),0.)-.017);
 float aa=max(fwidth(edge),.00035);
 vec3 metal=uFrame<.5?vec3(.65,.7,.73):uFrame<1.5?vec3(.76,.64,.43):vec3(.15,.18,.2);
 float bevel=.66+.22*band+.13*sin((uv.x+uv.y)*4.+dot(view,vec2(1.4,-1.)));
 float border=1.-smoothstep(.004-aa,.004+aa,edge);
 col=mix(col,metal*bevel+foil*uFoil*.035,border);
 float lip=1.-smoothstep(.0006,.0006+aa,abs(edge-.0013));
 col=mix(col,mix(metal,vec3(.93,.95,.96),.4)*bevel,lip*.7);
 float hairline=1.-smoothstep(.0005,.0005+aa,abs(edge-.023));
 col=mix(col,metal*(.78+band*.32)+foil*uFoil*.1,hairline*.7);
 return max(col,vec3(0.));
}
`,Oe=W+`
uniform sampler2D tSubject,tBackground,tText,tLine,tHalo,tDecoration;
void main(){
 vec2 uv=vUv;
 vec2 su=(parallax(uv,uDepth)-vec2(.5,.49))/uScale+vec2(.5,.49)-uOffset;
 vec4 sub=texture2D(tSubject,clamp(su,0.,1.));
 sub.a*=step(0.,su.x)*step(0.,su.y)*step(su.x,1.)*step(su.y,1.);
 vec2 bu=clamp(parallax(uv,uBgDepth)*.88+.06,0.,1.);
 vec3 bg=texture2D(tBackground,bu).rgb*uBrightness;
 vec3 ambient=(texture2D(tBackground,clamp(bu+vec2(.085,0.),0.,1.)).rgb+texture2D(tBackground,clamp(bu-vec2(.085,0.),0.,1.)).rgb+texture2D(tBackground,clamp(bu+vec2(0.,.065),0.,1.)).rgb+texture2D(tBackground,clamp(bu-vec2(0.,.065),0.,1.)).rgb)*.25;
 float ambientLuma=dot(ambient,vec3(.2126,.7152,.0722));
 vec3 tint=clamp(ambient/max(ambientLuma,.12),vec3(.55),vec3(1.65));
 vec2 halo=texture2D(tHalo,clamp(su,0.,1.)).rg;
 float inside=step(0.,su.x)*step(0.,su.y)*step(su.x,1.)*step(su.y,1.);
 halo*=inside;
 // Small color adaptation, broad light wrap, and an inset edge highlight.
 // Everything is reversible and tracks the same UV transform as the person.
 vec3 portrait=sub.rgb*mix(vec3(1.),tint,uIntegration*.15);
 portrait*=1.+uIntegration*clamp((ambientLuma*uBrightness-.35)*.15,-.05,.045);
 float inner=max(sub.a-halo.r,0.)*2.4;
 float wrap=max(sub.a-halo.g,0.);
 vec3 light=mix(vec3(.82,.9,1.),tint*.7,.65);
 portrait+=max(vec3(0.),1.-portrait)*light*(inner*uRim*.65+wrap*uIntegration*.22);
 float shadow=texture2D(tHalo,clamp(su+vec2(-.006,.008),0.,1.)).g*inside*(1.-sub.a);
 bg*=1.-shadow*uIntegration*.18;
 bg+=max(vec3(0.),1.-bg)*light*max(halo.g-sub.a,0.)*uRim*.09;
 vec3 base=mix(bg,portrait,sub.a);
 float line=(1.-texture2D(tLine,clamp(su,0.,1.)).r)*sub.a;
 vec3 col=finishSurface(uv,base,sub.a,line);
 float ornament=texture2D(tDecoration,uv).a*uDecoration*(1.-sub.a*.9);
 vec3 metal=uFrame<.5?vec3(.65,.8,.88):uFrame<1.5?vec3(.92,.72,.36):vec3(.46,.55,.64);
 vec3 stamped=mix(metal,foilColor(uv,pattern(uv)),.4)*(.75+.25*sin(uv.y*5.+dot(uView.xy,vec2(3.,2.))));
 col=mix(col,stamped,ornament*.72);
 vec4 text=texture2D(tText,uv);
 col=mix(col,text.rgb+foilColor(uv,pattern(uv))*.018*uFoil,text.a);
 gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(2.2)),1.);
}`,Ge=W+`uniform sampler2D tBack,tBackground;
void main(){vec2 uv=vUv;vec3 bg=texture2D(tBackground,uv).rgb*.25;
vec3 col=finishSurface(uv,bg,0.,pattern(uv)*.3);vec4 ink=texture2D(tBack,uv);col=mix(col,ink.rgb,ink.a);
gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(2.2)),1.);}`,Ve=W+"void main(){vec3 c=foilColor(vUv,pattern(vUv));vec3 metal=uFrame<.5?vec3(.6,.67,.72):uFrame<1.5?vec3(.7,.56,.34):vec3(.1,.12,.14);float sheen=.68+.15*sin(vUv.y*6.28+uView.x*2.);gl_FragColor=vec4(pow(metal*sheen+c*uFoil*.04,vec3(2.2)),1.);}",je=`varying vec2 vUv;
void main(){vec2 p=abs((vUv-.5)*vec2(4.2,5.9))-vec2(1.63,2.48);
float d=length(max(p,0.))+min(max(p.x,p.y),0.)-.07;
float shadow=exp(-max(d,0.)*max(d,0.)/.022)*.12;
gl_FragColor=vec4(.08,.1,.12,shadow);}`,te=[{id:"prism",name:"衍射棱镜",tag:"PRISM",color:"#6abec5",style:0,foil:.58,glitter:.24,relief:.2,gloss:.38},{id:"pearl",name:"珠光贝母",tag:"PEARL",color:"#d7bbb9",style:1,foil:.4,glitter:.08,relief:.16,gloss:.48},{id:"crystal",name:"碎钻冰晶",tag:"CRYSTAL",color:"#91bee4",style:2,foil:.62,glitter:.46,relief:.42,gloss:.36},{id:"galaxy",name:"银河星砂",tag:"GALAXY",color:"#a199d0",style:3,foil:.54,glitter:.6,relief:.18,gloss:.32},{id:"gold",name:"鎏金浮雕",tag:"GOLD",color:"#c6a061",style:4,foil:.64,glitter:.2,relief:.52,gloss:.34},{id:"silver",name:"银箔拉丝",tag:"SILVER",color:"#b6c3ce",style:5,foil:.48,glitter:.12,relief:.32,gloss:.42}],He=[{id:"aurora",name:"极光冰原",image:"/backgrounds/aurora.webp",thumbnail:"/backgrounds/aurora-thumb.webp",color:"#73d9dc"},{id:"botanical",name:"秘境花园",image:"/backgrounds/botanical.webp",thumbnail:"/backgrounds/botanical-thumb.webp",color:"#c8dca6"},{id:"celestial",name:"鎏金星图",image:"/backgrounds/celestial.webp",thumbnail:"/backgrounds/celestial-thumb.webp",color:"#dab676"},{id:"orbit",name:"深空轨道",color:"#9fddd1"},{id:"porcelain",name:"月白织纹",color:"#dedbea"},{id:"noir",name:"曜石几何",color:"#a3b7ce"}],Qe={natural:{integration:.58,rim:.42,edgeCleanup:.55}},qe={collector:{foil:.98,glitter:.72,relief:.5,gloss:.72,decoration:.82,protection:.88}},Z={version:1,finish:"prism",background:"aurora",artwork:"explorer",title:"ASTRA",subtitle:"BEYOND THE KNOWN",caption:"THE STAR SEEKER",edition:"001 / 099",backText:"Across the stars, a story of your own.",collection:"CELESTIAL ARCHIVE",footerLabel:"COLLECTOR SERIES",textTone:"auto",...qe.collector,...Qe.natural,density:.42,lightAngle:32,depth:.4,bgDepth:-.22,scale:1,offsetX:0,offsetY:0,bgBrightness:.62,bloom:!0,animated:!0,quality:"auto",sensitivity:1,frame:"silver",showText:!0,assets:{}};function We(r,e,i){const t=new Re;t.moveTo(-r/2+i,-e/2),t.lineTo(r/2-i,-e/2),t.quadraticCurveTo(r/2,-e/2,r/2,-e/2+i),t.lineTo(r/2,e/2-i),t.quadraticCurveTo(r/2,e/2,r/2-i,e/2),t.lineTo(-r/2+i,e/2),t.quadraticCurveTo(-r/2,e/2,-r/2,e/2-i),t.lineTo(-r/2,-e/2+i),t.quadraticCurveTo(-r/2,-e/2,-r/2+i,-e/2);const a=new Ae(t,16),s=a.attributes.position,o=a.attributes.uv;for(let n=0;n<s.count;n++)o.setXY(n,s.getX(n)/r+.5,s.getY(n)/e+.5);return a}class Xe{constructor(e,i){this.active=!0,this.stage=e,this.zoom=1,this.auto=!1,this.flipped=!1,this.targetX=.04,this.targetY=-.16,this.time=0,this.last=0,this.disposed=!1,this.exporting=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)"),this.abort=new AbortController,this.renderer=new be({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(15659250,1),this.renderer.outputColorSpace=xe,this.renderer.toneMapping=ee,this.renderer.toneMappingExposure=.98,e.append(this.renderer.domElement),this.scene=new we,this.camera=new ye(32,1,.1,100),this.camera.position.z=11,this.composer=new Le(this.renderer,new L(1,1,{type:z,samples:2})),this.composer.addPass(new ze(this.scene,this.camera)),this.bloom=new D(new T(1,1),.11,.42,.98),this.composer.addPass(this.bloom),this.composer.addPass(new Ne),this.uniforms={uTime:{value:0},uView:{value:new M(0,0,1)},uOffset:{value:new T}};for(const o of["uFoil","uGlitter","uGloss","uRelief","uDensity","uAngle","uStyle","uProtection","uBrightness","uFrame","uScale","uDepth","uBgDepth","uAnimated","uIntegration","uRim","uDecoration"])this.uniforms[o]={value:0};for(const o of["tSubject","tBackground","tText","tLine","tBack","tHalo","tDecoration"])this.uniforms[o]={value:null};this.card=new Te,this.scene.add(this.card),this.shadow=new I(new Me(4.2,5.9),new k({vertexShader:$,fragmentShader:je,transparent:!0,depthWrite:!1,side:Se})),this.shadow.position.set(.06,-.09,-.22),this.scene.add(this.shadow);const t=o=>new k({uniforms:this.uniforms,vertexShader:$,fragmentShader:o});this.card.add(new I(new q(3.4,5.1,.065,3,.06),t(Ve)));const a=new I(We(3.38,5.08,.065),t(Oe));a.position.z=.034,this.card.add(a);const s=new I(a.geometry.clone(),t(Ge));s.position.z=-.034,s.rotation.y=Math.PI,this.card.add(s),this.inverse=new Ce,this.animate=this.animate.bind(this),this.resize=this.resize.bind(this),this.observer=new ResizeObserver(this.resize),this.observer.observe(e),document.addEventListener("visibilitychange",()=>{this.last=performance.now(),this.renderer.setAnimationLoop(document.hidden||!this.active?null:this.animate)},{signal:this.abort.signal}),this.renderer.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.renderer.setAnimationLoop(null),i("图形上下文丢失，请刷新页面重新加载。")},{signal:this.abort.signal})}setTextures(e){this.dirty=!0;for(const[i,t]of Object.entries(e)){if(this.uniforms[i].value?.image===t)continue;this.uniforms[i].value?.dispose();const a=new _e(t);a.colorSpace=Pe,a.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.uniforms[i].value=a}}setState(e){this.dirty=!0;for(const[t,a]of Object.entries({uFoil:"foil",uGlitter:"glitter",uGloss:"gloss",uRelief:"relief",uDensity:"density",uProtection:"protection",uBrightness:"bgBrightness",uScale:"scale",uDepth:"depth",uBgDepth:"bgDepth",uIntegration:"integration",uRim:"rim",uDecoration:"decoration"}))this.uniforms[t].value=e[a];this.uniforms.uAngle.value=e.lightAngle*Math.PI/180,this.uniforms.uStyle.value=te.find(t=>t.id===e.finish).style,this.uniforms.uFrame.value=["silver","gold","black"].indexOf(e.frame),this.uniforms.uAnimated.value=e.animated&&!this.reduced.matches?1:0,this.uniforms.uOffset.value.set(e.offsetX,-e.offsetY),this.bloom.enabled=e.bloom&&e.quality!=="low";const i=Math.min(devicePixelRatio,e.quality==="low"?1:e.quality==="high"?2:matchMedia("(max-width: 700px)").matches?1.25:1.6);this.renderer.getPixelRatio()!==i&&(this.renderer.setPixelRatio(i),this.composer.setPixelRatio(i),this.resize())}resize(){if(this.exporting||this.disposed)return;this.dirty=!0;const e=Math.max(this.stage.clientWidth,1),i=Math.max(this.stage.clientHeight,1);this.camera.aspect=e/i,this.camera.position.z=Math.max(5.1/.82,3.65/this.camera.aspect/.83)/(2*Math.tan(_.degToRad(16)))/this.zoom,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i),this.composer.setSize(e,i)}tilt(e,i){this.targetX=_.clamp(e,-.48,.48),this.targetY=(this.flipped?Math.PI:0)+_.clamp(i,-.7,.7)}flip(){return this.flipped=!this.flipped,this.auto=!1,this.tilt(0,0),this.flipped}reset(){this.flipped=!1,this.auto=!1,this.zoom=1,this.tilt(.04,-.16),this.resize()}setActive(e){this.active=e,this.last=performance.now(),this.renderer.setAnimationLoop(e&&!document.hidden?this.animate:null)}start(){this.resize(),this.setActive(this.active)}animate(e){if(this.disposed||this.exporting||!this.active||matchMedia("(max-width: 700px)").matches&&e-(this.frameTime||0)<32)return;this.frameTime=e;const i=Math.min((e-this.last)/1e3,.05)||0;this.last=e,this.time+=i,this.auto&&this.tilt(Math.cos(this.time*.65)*.18,Math.sin(this.time*.72)*.46);const t=Math.abs(this.targetX-this.card.rotation.x)+Math.abs(this.targetY-this.card.rotation.y)>1e-5;if(!this.dirty&&!t&&!this.auto&&!(this.uniforms.uAnimated.value&&this.uniforms.uGlitter.value))return;this.dirty=!1;const a=this.reduced.matches?1:1-Math.exp(-i*6.5);this.card.rotation.x+=(this.targetX-this.card.rotation.x)*a,this.card.rotation.y+=(this.targetY-this.card.rotation.y)*a,this.shadow.rotation.copy(this.card.rotation),this.card.updateMatrixWorld(!0),this.uniforms.uView.value.copy(this.camera.position).applyMatrix4(this.inverse.copy(this.card.matrixWorld).invert()).normalize(),this.uniforms.uTime.value=this.time,this.composer.render()}async exportPNG(e){if(this.exporting)throw Error("正在导出");this.exporting=!0;const i=this.card.rotation.clone(),t=this.camera.position.clone(),a=this.camera.aspect,s=this.renderer.getPixelRatio();try{return this.shadow.visible=!1,this.card.rotation.set(0,this.flipped?Math.PI:0,0),this.card.updateMatrixWorld(!0),this.camera.aspect=2/3,this.camera.position.set(0,0,5.13/(2*Math.tan(_.degToRad(16)))+.034),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(1),this.composer.setPixelRatio(1),this.renderer.setSize(e,e*1.5,!1),this.composer.setSize(e,e*1.5),this.composer.render(),await new Promise((o,n)=>this.renderer.domElement.toBlob(l=>l?o(l):n(Error("PNG 导出失败")),"image/png"))}finally{this.shadow.visible=!0,this.card.rotation.copy(i),this.camera.position.copy(t),this.camera.aspect=a,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(s),this.composer.setPixelRatio(s),this.exporting=!1,this.resize(),this.last=performance.now()}}dispose(){this.disposed=!0,this.abort.abort(),this.observer.disconnect(),this.renderer.setAnimationLoop(null),this.scene.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()});for(const e of Object.values(this.uniforms))e.value?.isTexture&&e.value.dispose();for(const e of this.composer.passes)e.dispose?.();this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function Ye(r,e,i,t=.55){if(r.length!==e*i*4)throw Error("人物像素尺寸不一致");const a=new Uint8ClampedArray(r),s=Math.max(0,Math.min(1,t));if(!s)return a;for(let o=0;o<i;o++)for(let n=0;n<e;n++){const l=(o*e+n)*4,u=r[l+3];if(!u||u>=250)continue;let f=0,d=0,v=0,h=0;for(let c=-3;c<=3;c++)for(let b=-3;b<=3;b++){const p=n+b,x=o+c;if(!b&&!c||p<0||p>=e||x<0||x>=i)continue;const R=(x*e+p)*4;if(r[R+3]<250)continue;const S=1/(b*b+c*c);f+=S,d+=r[R]*S,v+=r[R+1]*S,h+=r[R+2]*S}if(!f)continue;const m=s*Math.min(.9,(1-u/255)*1.6);for(const[c,b]of[[0,d],[1,v],[2,h]])a[l+c]=r[l+c]*(1-m)+b/f*m}return a}const g=1024,w=1536;function P(r){const e=document.createElement("canvas");return e.width=g,e.height=w,r(e.getContext("2d",{willReadFrequently:!0})),e}function Ke(r,e,i=0,t=0,a=g,s=w){const o=Math.max(a/e.width,s/e.height);r.drawImage(e,i+(a-e.width*o)/2,t+(s-e.height*o)/2,e.width*o,e.height*o)}function A(r,e,i,t,a,s,o=400){do{if(r.font=`${o} ${i}px system-ui, sans-serif`,r.measureText(e).width<=s)break;i-=1}while(i>8);r.fillText(e,t,a)}function $e(r,e,i,t,a){let s,o=29;do{s=[];let n="";r.font=`${o}px system-ui, sans-serif`;for(const l of e.replace(/\s+/g," "))r.measureText(n+l).width>a?(s.push(n),n=l):n+=l;if(s.push(n),s.length*o*1.4<=205)break;o--}while(o>12);for(const n of s)r.fillText(n,i,t),t+=o*1.4}function J(r,e=!1,i=!1){return P(t=>{if(!r.showText)return;const a=i?"#263440":"#e2e6e8",s=i?"#40515f":"#b8cbd2";if(i||(t.shadowColor="#08141e80",t.shadowBlur=3,t.shadowOffsetY=1),t.fillStyle=a,A(t,r.collection,21,70,105,590,500),t.textAlign="right",A(t,r.edition,22,954,105,260),t.textAlign="left",e){t.strokeStyle="#b7c9d4",t.lineWidth=1.5;for(let o=0;o<5;o++)t.beginPath(),t.ellipse(512,650,220,65+o*38,o*.32,0,Math.PI*2),t.stroke();t.beginPath(),t.arc(512,650,45,0,Math.PI*2),t.stroke(),A(t,r.title,70,76,990,872,600),t.fillStyle=s,$e(t,r.backText,76,1060,850)}else A(t,r.title,96,70,256,884,500),t.fillStyle=s,A(t,r.subtitle,21,76,306,872,400);t.strokeStyle=i?"#33475980":"#d7e5ef80",t.lineWidth=1,t.beginPath(),t.moveTo(74,1310),t.lineTo(950,1310),t.stroke(),t.fillStyle=a,A(t,r.caption,30,74,1378,876,400),t.fillStyle=s,A(t,r.footerLabel,18,76,1446,540),t.textAlign="right",A(t,"HOLO / 2026",18,948,1446,290)})}function Ze(r){return P(e=>{e.fillStyle={orbit:"#0d2928",porcelain:"#dddfe5",noir:"#14181e"}[r],e.fillRect(0,0,g,w);let i=719;const t=()=>(i=i*16807%2147483647,(i-1)/2147483646);if(r==="orbit"){for(let a=0;a<950;a++){e.fillStyle=`rgba(184,223,207,${t()*.6+.12})`;const s=t()*2.3;e.fillRect(t()*g,t()*w,s,s)}e.strokeStyle="#678b8580",e.lineWidth=1.4;for(let a=0;a<5;a++)e.beginPath(),e.ellipse(512,760,350+a*60,570+a*65,.36,0,Math.PI*2),e.stroke()}else if(r==="porcelain")for(let a=0;a<170;a++){e.strokeStyle=a%3===0?"#bac2d065":"#fafcff90",e.lineWidth=2,e.beginPath();for(let s=0;s<=w;s+=16){const o=a*9-240+Math.sin(s/150+a*.065)*180;s?e.lineTo(o,s):e.moveTo(o,s)}e.stroke()}else{e.strokeStyle="#74838e50",e.lineWidth=1.2;for(let a=-800;a<1700;a+=80)e.beginPath(),e.moveTo(a,0),e.lineTo(a+900,w),e.stroke(),e.beginPath(),e.moveTo(a,w),e.lineTo(a+900,0),e.stroke();for(let a=0;a<24e3;a++)e.fillStyle=`rgba(180,196,210,${t()*.05})`,e.fillRect(t()*g,t()*w,1,1)}})}function Je(r,e){return P(i=>{if(e==="explorer"){i.drawImage(r,172,280,680,1020);const t=i.getImageData(0,0,g,w),a=t.data;for(let s=0;s<a.length;s+=4){const o=Math.min(a[s],a[s+2])-a[s+1];if(o>55){const n=1-Math.max(0,Math.min(1,(o-55)/80));a[s+3]*=n,n>0&&n<1&&(a[s]=Math.min(a[s],a[s+1]+35),a[s+2]=Math.min(a[s+2],a[s+1]+35))}}i.putImageData(t,0,0)}else{const t=e==="earth"?Math.min(900/r.width,900/r.height):Math.min(840/r.width,940/r.height),a=r.width*t,s=r.height*t;i.save(),e==="earth"&&(i.beginPath(),i.arc(512,790,400,0,Math.PI*2),i.clip()),i.drawImage(r,512-a/2,790-s/2,a,s),i.restore()}})}function et(r){return P(e=>{const i=r.getContext("2d").getImageData(0,0,g,w).data,t=e.createImageData(g,w),a=t.data;for(let s=0;s<w;s++)for(let o=0;o<g;o++){const n=(s*g+o)*4;let l=0;o<g-1&&s<w-1&&(l=Math.max(Math.abs(i[n+3]-i[n+7]),Math.abs(i[n+3]-i[n+g*4+3])),i[n+3]>128&&(l=Math.max(l,Math.abs(i[n]-i[n+4])*2,Math.abs(i[n]-i[n+g*4])*2))),a[n]=a[n+1]=a[n+2]=255-Math.min(255,l),a[n+3]=255}e.putImageData(t,0,0)})}function tt(r){const e=P(t=>{t.filter="blur(3px)",t.drawImage(r,0,0)}),i=P(t=>{t.filter="blur(16px)",t.drawImage(r,0,0)});return P(t=>{const a=e.getContext("2d").getImageData(0,0,g,w).data,s=i.getContext("2d").getImageData(0,0,g,w).data,o=t.createImageData(g,w),n=o.data;for(let l=0;l<n.length;l+=4)n[l]=a[l+3],n[l+1]=s[l+3],n[l+3]=255;t.putImageData(o,0,0)})}function it(){return P(r=>{r.strokeStyle="#fff",r.lineWidth=1.1;for(const e of[1,-1]){r.save(),r.translate(e===1?0:g,0),r.scale(e,1);for(let i=0;i<7;i++){r.beginPath();for(let t=145;t<=1290;t+=3){const a=32+i*2.1+Math.sin(t*.026+i*.38)*11;t===145?r.moveTo(a,t):r.lineTo(a,t)}r.stroke()}r.restore()}for(const[e,i,t,a]of[[51,51,1,1],[973,51,-1,1],[51,1485,1,-1],[973,1485,-1,-1]])r.save(),r.translate(e,i),r.scale(t,a),r.lineWidth=2,r.beginPath(),r.moveTo(0,100),r.lineTo(0,0),r.lineTo(160,0),r.stroke(),r.lineWidth=1,r.beginPath(),r.moveTo(7,67),r.lineTo(7,7),r.lineTo(105,7),r.stroke(),r.translate(19,19),r.rotate(Math.PI/4),r.strokeRect(-5,-5,10,10),r.restore();r.save(),r.translate(900,1220);for(let e=0;e<24;e++)r.rotate(Math.PI/12),r.beginPath(),r.ellipse(0,0,34,16,0,0,Math.PI*2),r.stroke();r.beginPath(),r.arc(0,0,23,0,Math.PI*2),r.stroke(),r.rotate(Math.PI/4),r.strokeRect(-9,-9,18,18),r.restore()})}class st{constructor(){this.images=new Map,this.layers=new Map}async image(e){if(this.images.has(e))return this.images.get(e);const i=(async()=>{const t=new Image;if(t.crossOrigin="anonymous",t.src=e,await t.decode(),!t.width||t.width*t.height>4e7)throw Error("图片尺寸过大");return t})();this.images.set(e,i),this.images.size>10&&this.images.delete(this.images.keys().next().value);try{return await i}catch(t){throw this.images.delete(e),t}}async prepare(e){const i=e.background==="custom"?e.assets.background:He.find(u=>u.id===e.background)?.image,t=e.artwork==="custom"?e.assets.subject:e.artwork==="earth"?"/generated/earth.webp":"/generated/explorer-source.png",[a,s]=await Promise.all([this.image(t),i?this.image(i):null]);if(this.subjectKey!==t&&(this.subjectKey=t,this.rawSubject=Je(a,e.artwork),this.halo=tt(this.rawSubject),this.cleanup=null),this.cleanup!==e.edgeCleanup){this.cleanup=e.edgeCleanup;const u=this.rawSubject.getContext("2d").getImageData(0,0,g,w);this.subject=P(f=>f.putImageData(new ImageData(Ye(u.data,g,w,e.edgeCleanup),g,w),0,0)),this.lines=et(this.subject)}this.decoration||=it();const o=i||e.background;if(this.backgroundKey!==o){this.backgroundKey=o,this.background=s?P(h=>Ke(h,s)):Ze(e.background);const u=document.createElement("canvas");u.width=16,u.height=24;const f=u.getContext("2d");f.drawImage(this.background,0,0,16,24);const d=f.getImageData(0,0,16,24).data;let v=0;for(let h=0;h<d.length;h+=4)v+=d[h]*.2126+d[h+1]*.7152+d[h+2]*.0722;this.luminance=v/(384*255)}const n=e.textTone==="dark"||e.textTone==="auto"&&this.luminance*e.bgBrightness>.4,l={tSubject:this.subject,tHalo:this.halo,tDecoration:this.decoration,tLine:this.lines,tBackground:this.background,tText:J(e,!1,n),tBack:J(e,!0)};if(e.quality==="low"||matchMedia("(max-width: 700px)").matches){this.smallLayers||=new WeakMap;for(const[u,f]of Object.entries(l)){let d=this.smallLayers.get(f);d||(d=document.createElement("canvas"),d.width=512,d.height=768,d.getContext("2d").drawImage(f,0,0,512,768),this.smallLayers.set(f,d)),l[u]=d}}return l}}class at{constructor(e,i){this.onTilt=e,this.onStatus=i,this.active=!1,this.pending=!1,this.baseline=null,this.latest=null,this.sensitivity=1,this.sequence=0,this.q=new U,this.relative=new U,this.euler=new ke,this.cameraCorrection=new U(-Math.SQRT1_2,0,0,Math.SQRT1_2),this.screenCorrection=new U,this.zAxis=new M(0,0,1),this.handle=this.handle.bind(this),this.reorient=()=>{this.baseline=null}}async enable(){if(this.pending||this.active)return;if(!window.isSecureContext){this.onStatus("unavailable","手机体感需要 HTTPS 安全连接。");return}const e=window.DeviceOrientationEvent;if(!e){this.onStatus("unavailable","当前设备不支持体感，可继续拖动卡片。");return}const i=++this.sequence;this.pending=!0,this.onStatus("requesting","等待体感授权");try{const t=typeof e.requestPermission=="function"?await e.requestPermission():"granted";if(i!==this.sequence)return;if(t!=="granted"){this.onStatus("denied","体感权限未获允许，可继续拖动卡片。");return}this.active=!0,this.baseline=null,this.latest=null,window.addEventListener("deviceorientation",this.handle),window.addEventListener("orientationchange",this.reorient),screen.orientation?.addEventListener("change",this.reorient),this.onStatus("waiting","等待传感器"),this.timer=setTimeout(()=>{this.latest||(this.stop(),this.onStatus("unavailable","未收到体感数据，可继续拖动卡片。"))},6500)}catch{this.onStatus("denied","无法启用体感，请检查浏览器的运动与方向权限。")}finally{i===this.sequence&&(this.pending=!1)}}handle(e){if(!this.active||document.hidden||!Number.isFinite(e.beta)||!Number.isFinite(e.gamma))return;const i=_.degToRad(screen.orientation?.angle??window.orientation??0);this.euler.set(_.degToRad(e.beta),_.degToRad(Number.isFinite(e.alpha)?e.alpha:0),-_.degToRad(e.gamma),"YXZ"),this.q.setFromEuler(this.euler).multiply(this.cameraCorrection).multiply(this.screenCorrection.setFromAxisAngle(this.zAxis,-i)),this.latest=this.q.clone(),this.baseline||(this.baseline=this.latest.clone(),clearTimeout(this.timer),this.onStatus("active","体感已连接")),this.relative.copy(this.baseline).invert().multiply(this.q),this.euler.setFromQuaternion(this.relative,"YXZ"),this.onTilt(_.clamp(-this.euler.x*this.sensitivity,-.48,.48),_.clamp(this.euler.y*this.sensitivity,-.65,.65))}calibrate(){this.baseline=this.latest?.clone()??null,this.active&&this.onTilt(0,0)}stop(){this.sequence++,this.pending=!1,this.active=!1,this.baseline=null,this.latest=null,clearTimeout(this.timer),window.removeEventListener("deviceorientation",this.handle),window.removeEventListener("orientationchange",this.reorient),screen.orientation?.removeEventListener("change",this.reorient),this.onStatus("off","拖动预览")}}function lt({manifest:r,subject:e,onReady:i,onError:t}){const a=C.useRef(null),s=C.useRef(null),o=C.useRef(null),n=C.useRef(null),l=C.useRef(Promise.resolve()),u=C.useRef({onReady:i,onError:t});u.current={onReady:i,onError:t};const[f,d]=C.useState("拖动欣赏 · 方向键调整视角"),v=C.useRef(0);return C.useEffect(()=>{const h=a.current;let m;try{m=new Xe(h,()=>u.current.onError("动态效果暂时不可用，已显示静态名牌，可重新开启"))}catch{u.current.onError("此设备暂不支持动态闪卡，已显示静态名牌");return}s.current=m,o.current=new st;const c=new at((E,j)=>m.tilt(E,j),(E,j)=>d(j));n.current=c;const b={};let p=!0;const x=()=>window.dispatchEvent(new CustomEvent("holo-player-active",{detail:b})),R=E=>{E.detail!==b&&m.setActive(!1)},S=()=>{x(),m.setActive(p)};window.addEventListener("holo-player-active",R),h.addEventListener("pointerdown",S),h.addEventListener("focus",S);const X=new IntersectionObserver(([E])=>{p=E.isIntersecting,p?S():(m.setActive(!1),c.stop())},{threshold:.05});return X.observe(h),()=>{v.current++,X.disconnect(),window.removeEventListener("holo-player-active",R),h.removeEventListener("pointerdown",S),h.removeEventListener("focus",S),c.stop(),m.dispose(),s.current=null,o.current=null,n.current=null,u.current.onReady(null)}},[]),C.useEffect(()=>{const h=s.current,m=o.current;if(!h||!m||!e)return;const c=++v.current;u.current.onReady(null);const b={...Z,...r,finish:r.template,background:{prism:"orbit",pearl:"porcelain",gold:"noir"}[r.template],artwork:"custom",assets:{subject:e},title:r.title,subtitle:r.subtitle,backText:r.backText,caption:"很高兴与你相遇",edition:"PERSONAL / 01",collection:"KIGHUB · 扩列名牌",footerLabel:"COLLECTOR EDITION",frame:r.template==="gold"?"gold":"silver",foil:r.template==="pearl"?.7:Z.foil,quality:"auto"};te.some(p=>p.id===b.finish)&&(l.current=l.current.catch(()=>{}).then(async()=>{if(v.current!==c)return;const p=await m.prepare(b);v.current===c&&(h.setTextures(p),h.setState(b),h.start(),u.current.onReady({exportPNG:()=>h.exportPNG(1024),flip:()=>{h.flip()},reset:()=>{h.reset(),n.current?.calibrate()},orientation:()=>{n.current?.active?n.current.stop():n.current?.enable()}}))}).catch(()=>{v.current===c&&u.current.onError("动态素材加载失败，已显示静态名牌")}))},[r,e]),H.jsxs("div",{children:[H.jsx("div",{ref:a,className:"holo-stage",tabIndex:0,role:"img","aria-label":`${r.title}的动态闪卡，使用方向键调整视角`,onPointerMove:h=>{if(h.pointerType!=="mouse"&&h.buttons!==1)return;const m=h.currentTarget.getBoundingClientRect();s.current?.tilt((h.clientY-m.top-m.height/2)/m.height*.65,(h.clientX-m.left-m.width/2)/m.width)},onPointerLeave:()=>s.current?.tilt(.04,-.16),onKeyDown:h=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(h.key)&&(h.preventDefault(),s.current?.setActive(!0),s.current?.tilt(h.key==="ArrowUp"?-.3:h.key==="ArrowDown"?.3:0,h.key==="ArrowLeft"?-.5:h.key==="ArrowRight"?.5:0))}}),H.jsx("p",{className:"holo-hint",role:"status",children:f})]})}export{lt as default};
