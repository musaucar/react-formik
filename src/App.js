import './App.css';
import { Formik } from 'formik';


function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            hobies:[],
            country: "",
          }}
          onSubmit={ (values) => {
            console.log(values);
          }}
        >
          {
            ({handleSubmit, handleChange, values}) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input name='firstName' onChange={handleChange}/>
                <br />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input name='lastName' onChange={handleChange}/>

                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input name='email' onChange={handleChange}/>

                <br />
                <br />

                <span>Male</span>
                <input type="radio" name='gender' value="male"onChange={handleChange}/>

                <span>Female</span>
                <input type="radio" name='gender' value="female"onChange={handleChange}/>
                <br />
                <br />

                <div>
                  <input type="checkbox" name='hobies' value="Play video game" onChange={handleChange}/>
                  Video Game
                </div>
                
                <div>
                  <input type="checkbox" name='hobies' value="Watching movie" onChange={handleChange}/>
                  Movie
                </div>
                <div>
                  <input type="checkbox" name='hobies' value="Bodybuilding" onChange={handleChange}/>
                  Fitness
                </div>
                
                <br />

                <select name="country" onChange={handleChange}>
                  <option value="tr">Turkey</option>
                  <option value="en">England</option>
                  <option value="usa">USA</option>
                </select>

                <button type="submit">Submit</button>
                <br />
                <br /> 

                <code>{JSON.stringify(values)}</code>
              </form>
            )
          }
        </Formik>
    </div>
  );
}

export default App;
