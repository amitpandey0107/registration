import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getStates, getCities, registerData } from '../actions/registration';
import SignUpImage from '../public/signup.png';
import './registration.css'
const Registration = (props) => {
    const dispatch = useDispatch();
    const [countries, setCountries] = useState('');
    const [cities, setCities] = useState('');
    const [states, setStates] = useState('');
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        email:'',
        address1:'',
        address2:'',
        country:'',
        state:'',
        city:''
    })
    const [errors, setErrors] = useState({
        first_name:'',
        last_name:'',
        email:'',
        address1:'',
        address2:'',
        country:'',
        state:'',
        city:''
    })
    const countriesSelector = useSelector(state => state.registration.countries);
    const stateSelector = useSelector(state => state.registration.states);
    const citiesSelector = useSelector(state => state.registration.cities);
    const registerSelector = useSelector(state => state.registration.regsiterResult);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    function validateEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const result = regex.test(email);
        if (!result) {
            return 'Invalid email address.'
        }
    }

    const handleCountries = (event) => {
        let selValue = event.target.value;
        if (selValue!=="") {
            setCountries(selValue)
            dispatch(getStates(selValue));
            setFormData({
                ...formData,
                country:selValue
            })
        }
    }

    const handleStates = (event) => {
        let selValue = event.target.value;
        if (selValue!=="") {
            setStates(selValue)
            dispatch(getCities(countries, selValue));
            setFormData({
                ...formData,
                state:selValue
            })
        }
    }

    const handleCities = (event) => {
        let selValue = event.target.value;
        const {options, selectedIndex} = event.target;
        let disText = options[selectedIndex].innerHTML;
        if (selValue!==''){
            setCities(selValue)
            setFormData({
                ...formData,
                city:disText
            })
        }
    }

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        }) 
        if (name==='first_name') {
            if (value === '' || value===null || value.length < 1) {
                setErrors({
                    ...errors,
                    [name]: 'First name must not be blank'
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        if (name==='last_name') {
            if (value === '' || value===null || value.length < 1) {
                setErrors({
                    ...errors,
                    [name]: 'Last name must not be blank'
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        } 
        if (name==='email') {
            if (value === '' || value===null || value.length < 1) {
                setErrors({
                    ...errors,
                    [name]: 'Email must not be blank'
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        if (name==='address1') {
            if (value === '' || value===null || value.length < 1) {
                setErrors({
                    ...errors,
                    [name]: 'Address 1 must not be blank'
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        } 
        if (name==='address2') {
            if (value === '' || value===null || value.length < 1) {
                setErrors({
                    ...errors,
                    [name]: 'Address 2 must not be blank'
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }       
        
        
    }

    const handleSubmit = () => {
        // console.log("ALL DATA", formData)
        if (formData){
            dispatch(registerData(formData));
        }
    }

    return (
        <div className='registration'>
            <div className='col4'>
                <div className='siteInfo'>CONCORD</div>
                <div className='sidebarInfo'>A few clicks away from creating you Concord account.</div>
                <div className='sidebarImage'>
                    <img src={SignUpImage} alt="sign-up" />
                </div>
            </div>
            <div className='col8'>
                <div className='registrationContent'>
                    <h3>Registration</h3>
                    <div className='registerText'>Create a new account</div>
                    <div className='registerFormWrap'>
                        <div className='row'>
                            <div className='col6'>
                                <div className='formGroup'>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className='formControl'
                                        name='first_name'
                                        onChange={handleInput}
                                    />
                                    {errors && errors.first_name.length >= 0 && 
                                    <span className='error'>{errors.first_name}</span>}
                                </div>
                            </div>
                            <div className='col6'>
                                <div className='formGroup'>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className='formControl'
                                        name='last_name'
                                        onChange={handleInput}
                                    />
                                    {errors && errors.last_name.length >= 0 && 
                                    <span className='error'>{errors.last_name}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='formGroup'>
                                    <label>Email Address</label>
                                    <input
                                        type="text"
                                        className='formControl'
                                        name='email'
                                        onChange={handleInput}
                                    />
                                    {errors && errors.email.length >= 0 && 
                                    <span className='error'>{errors.email}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='addressTxt'>Address</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col6'>
                                <div className='formGroup'>
                                    <label>Address 1</label>
                                    <input
                                        type="text"
                                        className='formControl'
                                        name='address1'
                                        onChange={handleInput}
                                    />
                                    {errors && errors.address1.length >= 0 && 
                                    <span className='error'>{errors.address1}</span>}
                                </div>
                            </div>
                            <div className='col6'>
                                <div className='formGroup'>
                                    <label>Address 2</label>
                                    <input
                                        type="text"
                                        className='formControl'
                                        name='address2'
                                        onChange={handleInput}
                                    />
                                    {errors && errors.address2.length >= 0 && 
                                    <span className='error'>{errors.address2}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='formGroup'>
                                    <label>Country</label>
                                    {
                                    countriesSelector 
                                    ? 
                                    <select className='formControl' onChange={handleCountries}>
                                        <option value=''>Please select any state</option>
                                        {countriesSelector.map((country, index) => (
                                            <option value={country.code} key={index}>{country.name}</option>
                                        ))}
                                    </select>
                                    :
                                    ''
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='formGroup'>
                                    <label>State</label>
                                    {
                                    stateSelector
                                    ?
                                    <select className='formControl' onChange={handleStates}>
                                        <option value=''>Please select any state</option>
                                        {stateSelector.map((state, index) => (
                                            <option value={state.state_code} key={index}>{state.name}</option>
                                        ))}
                                    </select>
                                    :
                                    ''}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='formGroup'>
                                    <label>City</label>
                                    {
                                    citiesSelector
                                    ?
                                    <select className='formControl' onChange={handleCities}>
                                        <option value=''>Please select any city</option>
                                        {citiesSelector.map((city, index) => (
                                            <option value={city.id} key={index}>{city.name}</option>
                                        ))}
                                    </select>
                                    :
                                    ''}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12 noPadding'>                                
                                <div className='buttonWrap'>
                                    <button className='submitBtn' onClick={handleSubmit}>
                                        Create Account 
                                        {/* <div className="loader"></div> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col12'>
                                <div className='resultRes'>
                                    {registerSelector && registerSelector.message ? <div className='response'><strong>Success</strong> {registerSelector.message} </div> : ''}                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;