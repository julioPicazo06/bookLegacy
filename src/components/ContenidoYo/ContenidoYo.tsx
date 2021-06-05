import React from 'react'

export const ContenidoYo = () => {
    return (
 <div>
  <div className="fh5co-loader" />
  <div id="page">
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Acerca de mi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <h2 style={{backgroundColor: '#F43D4D', color: 'white', padding: 10}}>Contacto:</h2>
              <li><span className="first-block">Nombre:</span><span className="second-block">Julio Eduardo Picazo Rodriguez</span></li>
              <li><span className="first-block">TEl:</span><span className="second-block">55-32-35-23-20</span></li>
              <li><span className="first-block">Email:</span><span className="second-block" style={{fontSize: 12}}><a href="mailto:juliopicazo06@gmail.com">juliopicazo06@gmail.com</a></span></li>
              <li style={{fontSize: 13}}><span className="first-block">Website:</span><span className="second-block" style={{fontSize: 10}}><a href="http://www.bookjuliopicazo.fizharts.com.mx">bookjuliopicazo.fizharts.com.mx</a></span></li>
              {/* <li><span class="first-block">Address:</span><span class="second-block">198 West 21th Street, Suite 721 New York NY 10016</span></li> */}
            </ul>
          </div>
          <div className="col-md-8">
            <h2 style={{backgroundColor: '#F43D4D', color: 'white', padding: 10}}>Soy:</h2>
            <p>	Diseñador &amp; desarrollador web, ilustrador, con experiencia dentro del diseÃ±o de personaje y la
              ilustración instucional, con un gran gusto por
              el desarrollo y el diseño web, autodidacta dentro de las
              nuevas tecnologí­as frameworks que cada dí­a amplián mas la velocidad
              y los alcances del desarrollo.Gran facilidad para el diseño de logotipos y personajes tanto instucionales como
              para cor  tometrajes.
            </p>
            <p>
            </p><ul className="fh5co-social-icons">
              {/* <li><a href="#"><i class="icon-linkedin2"></i></a></li> */}
              <li><a href="#"><img src="images/behance.png" width={25}  style={{paddingBottom: 4}} /></a></li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
    <hr style={{color: 'red!important'}} />
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>CV</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div><h3 style={{backgroundColor: '#F43D4D!important', color: 'white!important'}}>Experiencia Laboral</h3></div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Front end Developer / Punto Pen</h3>
                    <span className="company">2016 | 2017</span>
                  </div>
                  <div className="timeline-body">
                    <p>Programación front-end paar paginas gubernamentales y para la secretaria de salud, Diseño UX/UI </p>
                  </div></div></li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Master / Starker</h3>
                    <span className="company">2014 | 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Web Master, Seo, Campañas de mailing, campañas de redes sociales, trato directo con el cliente, depuración de errores, creación de material didáctico para nuevos prospectos.							</p></div>
                  <p />				</div></li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Master / Ecocare</h3>
                    <span className="company">2013 | 2014</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Desarrollo de intranet para el aprenizaje de remanufactura de tóner, mantenimiento de foros, gestión de usuarios, métodos de cobro desde paypal, desarrollo de paginas web</p>								</div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diseño &amp; Desarrollo Web / Fizharts</h3>
                    <span className="company">2012 | 2013</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Desarrollo de personajes, páginas web, desarrollo web, diseño de logotipos, trato directo con cientes. detectar errores dentro del codigo, optimización para dispositivos móviles.
                    </p>								</div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diseñador Web / G soft Microsoft partner</h3>
                    <span className="company">2010 | 2012</span>
                  </div>
                  <div className="timeline-body">
                    <p>Desarrollo de ilustración interna, diseño y desarrollo Web. Aprendí a desarrollar una página web desde 0, además de inciarme en el desasrrollo web y de interfaces para software a la medida.</p>
                  </div>
                </div>
              </li>
              <br />
              <li className="timeline-heading text-center animate-box">
                <div><h3 style={{backgroundColor: '#F43D4D!important', color: 'white!important'}}>Educación</h3></div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Licenciatura en Diseño Gráfico</h3>
                    <span className="company">2007 - 2010</span>
                  </div>
                  <div className="timeline-body">
                    <p />
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diplomado en animación de personajes</h3>
                    <span className="company">UAM | 2010 - 2012</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diplomado en diseño &amp; desarrollo Web</h3>
                    <span className="company">UCI | 2012 - 2013</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diplomado Animación 3D para cortometrajes</h3>
                    <span className="company">ED (Escuela digital) | 2014 - 2015</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Curso PHP</h3>
                    <span className="company">Media Tech | 2016</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diplomado Georeferencia</h3>
                    <span className="company">Instituto de Geografia UNAM | 2016</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge"><img src="images/code.png" width={20} alt={"nombre"} style={{paddingBottom: 4}} /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Curso Desarrollo en Android</h3>
                    <span className="company">UAQ (Universidad Autonoma de Queretaro) | 2016</span>
                  </div>
                  <div className="timeline-body">
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


    )
}
