import React, { useState, useEffect } from 'react'
import { Link, redirect,useLocation, useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ( ) => {
    const history = useNavigate()
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => { 
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        history('/payment')
    }
    
  return (
      <FormContainer>
          <CheckoutSteps step1 step2 />
          <h1>Shipping</h1>
          <Form onSubmit={submitHandler} >
          <Form.Group className="mb-3" controlId='address'>
                  <Form.Label s>Address</Form.Label>
                  <Form.Control type='text'
                      placeholder='Enter address'
                      value={address}
                      required
                      onChange={(e) => setAddress(e.target.value)}
                      >
                      </Form.Control>
              </Form.Group>
          <Form.Group className="mb-3" controlId='City'>
                  <Form.Label >City</Form.Label>
                  <Form.Control type='text'
                      placeholder='Enter city'
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}>
                      </Form.Control>
              </Form.Group>
          <Form.Group  className="mb-3" controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type='text'
                      placeholder='Enter Postal Code'
                      value={postalCode}
                      required
                      onChange={(e) => setPostalCode(e.target.value)}>
                      </Form.Control>
              </Form.Group>
          <Form.Group  className="mb-3" controlId='country'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type='text'
                      placeholder='Enter country'
                      value={country}
                      required
                      onChange={(e) => setCountry(e.target.value)}>
                      </Form.Control>
              </Form.Group>
              <Button type='submit' variant='primary'>
                  Continue
                  
              </Button>
              
          </Form>
    </FormContainer>
  )
}

export default ShippingScreen