import {send,init} from 'emailjs-com';
import { useState } from 'react';
export const ContactUs = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
const [isSent, setIsSent] = useState(true);
  const onSubmit = (e) => {
    setIsSent(true);
    init('qF26p2Cnrk8qRwIFqYvd9')
    e.preventDefault();
    send('service_accz47j', 'template_8o9ifze', toSend,'v0q1ILfCqERvPommT')
      .then((response) => {
          console.log(response.text);
      }, (error) => {
        setIsSent(false)
          console.log(error.text);
      });

  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
    {isSent&&<div className="contact-us">
      <h1>צור קשר</h1>
      <div className="contact-us-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">שם</label>
            <input type="text" className="form-control" id="name" placeholder=" שם" name="from_name" value={toSend.from_name}
    onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input type="email" className="form-control" id="email" placeholder=" אימייל" name="reply_to" value={toSend.reply_to}
    onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">הודעה</label>
            <textarea className="form-control" id="message" rows="3" name="message" value={toSend.message}
    onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" >שלח</button>
        </form>
      </div>
    </div>}
    {!isSent&&<div className="error">
      <h1>שגיאה זמנית</h1>
      <p>עד שהתקלה תפתר מוזמנים ליצור קשר במייל: oritziladv@gmail.com
</p>
      </div>}
    </>
  );
}