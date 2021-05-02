import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
const Contact = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ewoxkqi', e.target, 'user_Tm3lGooA54RIMqc4j1LL3')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      }
  
    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>

            <section id="contact" style={{marginTop:'50px',marginBottom:'50px'}}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h2>Get in touch</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                      

    
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="subject" value="Got new email from portfolio"/>

      <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control"  name="name" />
      </div>

      <div className="mb-3">
      <label for="email" className="form-label">Email</label>
      <input type="email" className="form-control"  name="email" />
      </div>

      <div className="mb-3">
      <label for="msg" class="form-label">Message</label>
                            <textarea name="msg" class="form-control" id="msg" rows="3"></textarea>
                           
      </div>
      
    
      <input type="submit" value="Send" className="btn"  style={{backgroundColor:'#e2edff', color:'slateblue',fontWeight:'600'}}/>
    </form>
  
                        </div>
                    </div>
                </div>

            </section>
          
        </div>
    );
};

export default Contact;