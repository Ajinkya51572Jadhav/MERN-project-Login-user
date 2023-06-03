import React from 'react'
import { NavLink } from 'react-router-dom';
import "../inner.css";

const Blogs = () => {
  return (
    <div>
    <div className="allNavlink">
    <NavLink to={'/blogs'}><span className="header_line">Blogs</span></NavLink>
     <NavLink to={'/project'}><span className="header_line">Project</span></NavLink>
     <NavLink to={'/home2'}><span className="header_line">Home</span></NavLink>
     </div>


      <div className='all_blog'>

      <p>
      <div className='all_Question'>      
      1  what is HTML ?
      </div>
  
      HTML stands for hyper text markup 
      Language.html is the standard markup Language for
       creating web pages. HTML deScribe the structure of 
       a web page.HTML consists of a series of elements.HTML
       elements tell the browser how to display the content.
    
       </p><br/><br/>
      

       <p className='blog_text'>
       <div className='all_Question'>
       2 what role of an HTML Developer ?
       </div>
   
        An HTML developer is a front-end web developer responsible for the 
      Complete end-to-end coding of websites.They use coding Language 
      to create the visual appearanse of websites. They often  collaborate 
      with   web designers and back-end web developer.

        </p><br/><br/>





        <p>
        <div className='all_Question'v>
       3  what are  the skills required to become an HTML developer ?
       </div> 
    
            the following are the skills required  become an HTML developer: 
            Good understanding of computer-programming technologies , Knowledge of how 
            to design ,build, and deploy webpages ,sites,or application , ability to 
            create websites using HTML,XML,java ,css and other Language.
   
         </p><br/><br/>







         <p className='blog_text'>
         <div className='all_Question'v>
        4  what is data transfer API?
        </div> 
    

         The managemant of data transfer form one user to another within a 
         domain is handled by data Transfer API.
         To add the transfer request ,use the insert Method
      
          </p><br/><br/>








          <p>
          <div className='all_Question'>
          5  Will HTML5 Work if i don't use  !DOCTYPE html ?
          </div>
       
          NO, the HTML 5 tags won't work properly the browser won't be able to 
          tell that it's an HTML document.
      
           </p><br/><br/>











           <p className='blog_text'>
           <div className='all_Question'>
           6  what is css ?
           </div>
        
               css stands for Cascading Style Sheet.
               it's style sheet Language that determines how the elements  contects 
               in the page are looked shown .css is used to delelop a consistent look and 
               feel for all the pages.
          
            </p><br/><br/>













            <p>
            <div className='all_Question'>
            7 how to include css in the webpages ?
            </div> 
        
             1 External Style Sheet : An external File 
             linked to your HTML document.using link tag ,we can link the 
             style sheet to the HTML page <br/><br/>

             link rel='stylesheet' href='style.css'  <br/><br/> 
             
             2 Embed css with a style tag : A set of css styles included within your
             HTML page.<br/><br/>
               
            style <br/>


             </p><br/><br/>






             <p className='blog_text'>
             <div className='all_Question'>
             8  what is difference between inline, inline-block , and block ?
             </div>
           
            Block Element : The block Elements always start on a new line.They will 
            also take space for an entire row or Width .
            List of block elements are div &  p <br/><br/>
            
             Inline Element : inline elements don't start on a new line, they appear on the 
              same line as the content and tags beside them . some Ex a , span , strong , and img  tags .<br/><br/>

              Inline Block Element : inline-block elements are similer to inline elements
              except they can have padding and margin and set height and widht values.


       
              </p><br/><br/>








              <p>
              <div className='all_Question'>
              9 what are Pseudo elements and Pseudo classes ?
              </div>
             
               Pseudo-elements : allows us to create items that do not normally exist <br/>
                in the document tree , for example<br/>
                 ::after<br/>
                :: before<br/>
                :: after<br/>
                :: first-letter<br/>
                :: selection<br/>

               Pseudo-classes  : select regular elements but under certain conditions like when 
               the user is hovering over the link .
               <br/>
               : link<br/>
               : visited <br/>
               : hover <br/>
               : focus <br/>
             
               </p><br/><br/>









               <p className='blog_text'>
               <div className='all_Question'>
               10 different Box Sizing Property ?
               </div>
             
               The box-sizing css property sets how the total  width and height of an element
             are calculated.<br/><br/>

             Content-box : The default width and height values apply to the Elements content only
             The padding and border are added to the outside of the box.<br/><br/>

            padding-box : width and height values applay to the elements content and its padding 
            The border is added to the outside of the box.
            Currently ,only FireBox supports the padding-box value.
            
            Border-Box : Width and height values apply to the content ,padding and 

            border.




                </p><br/><br/>









                <p>
                <div className='all_Question'>
                11   what is javascript ?
                </div>
             
                 javascript is a very powerful client-side
                 scripting Language.javascript is used mainly for
                 enhancing the interaction of a user with the webpage.in 
                 other words,you can make your webpage more lively and interactive
                 with the help of javascript.javascript is also being used widely in
                 game development and mobile application development.

            
                 </p><br/><br/>









                 <p className='blog_text'>
                 <div className='all_Question'>
                 12 Enumerate The difference between java and javascript ?
                 </div>
             
                  java is a complete programming Language. In contract ,
                  javascript is a coded program that can be introduced to 
                  html pages. these Two Language are not at all inter-dependent
                  are designed for different intent . java is an
                  object- oriented programming (OOPS)  or 
                  structured programming languages like c++ or c 
                  Whereas javascript is a client-side scripting languages. 
               
                  </p><br/><br/>









                  <p>
                  <div className='all_Question'>
                  13 what are javascript data types  ?
                  </div>
                
                    Number <br/>
                    string<br/>
                    Boolean <br/>
                    Object<br/>
                    undefined<br/>
                    Bigint <br/>
                    Symbol <br/>
                
                   </p><br/><br/>







                   <p className='blog_text'>
                   <div className='all_Question'>
                   14 What is the use of isNaN function ?
                   </div>
                 
                     isNan function returns true if the
                     argument is not a number otherwise it is false .
                   
              
                    </p><br/><br/>




                    <p>
                    <div className='all_Question'>
                    15 what 'this' keyword in javascript ?<br/>
                    </div>
                
                     'this' keyword refers to the object from where it was called.
                  
                     </p><br/><br/>









                     <p className='blog_text'>
                     <div className='all_Question'>
                     16 What is called variable typing in javascript  ?
                     </div>
                  
                     variable typing is used to assign a 
                      number to a variable. the same variable 
                     can be assigned to a string.
                     Example<br/>
                     i = 10;<br/>
                     i = "string"<br/>  

                  
                      </p><br/><br/>












                      <p>
                      <div className='all_Question'>
                      17  what do you mean by NULL in javascript?
                      </div>
                    
                        the NULL value is used to represent no value 
                        or  no object . it implise no object or null string 
                        ,no valid boolean value , no number , and no array object .
                   
                       </p><br/><br/>










                       <p className='blog_text'>
                       <div className='all_Question'>
                       18  what is an undefined value in javascript?
                       </div>
                    
                        variable used in the code doesn't exist
                        variable is not assigned to any value 
                        property does not exist .
                     
                        </p><br/><br/>








                        <p>
                        <div className='all_Question'>
                        19  what is the use of a type of operator ?
                        </div>
                      
                            'Typeof' is an operator used to return a 
                         elements tell the browser how to display the content.
                            string description of the type of a variable.                       
                      
                         </p><br/><br/>











                         <p className='blog_text'>
                         <div className='all_Question'>
                         20  what is event bubbling?
                         </div>
                        
                          javascript allowas DOM elements to be 
                          nesteed inside each other .In such a case , if
                          the handle of the parent will also work as if 
                          it were clicked too.
                          
                          </p><br/><br/>


      </div>

      <footer className='footer_container'>
      <h2>connet with me</h2>
      <div className='footer_navlink'>
      
      <NavLink to={"https://github.com/Ajinkya51572Jadhav"}><span>Github</span></NavLink>
      <NavLink to={'https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/'}><span>Linkdin</span></NavLink>
      <NavLink to={'https://www.instagram.com/ajinkya_jadhav_77777'}><span>Instagram</span></NavLink>
      </div>
      </footer>

    </div>
  )
}

export default Blogs
