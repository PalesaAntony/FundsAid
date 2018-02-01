import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ReactTable from 'react-table'

const products =[{}]

let PurchaseForm = props => {

  const { array: { push }, handleSubmit, pristine, reset, submitting } = props
  return (
    <form className='column' onSubmit={handleSubmit}>
      <div>
        <label className='header' htmlFor='startDate'>Item</label>
        <Field name="Item" placeholder="Item" component="input" type="text" />
      </div>
      <div>
        <label className='header' htmlFor='Price'>Price</label>
        <Field name="Price" placeholder="Price" component="input" type="number" />
      </div>
      <button className="button" type="submit">Process Payment</button>
    </form>
  )
}

const onSubmit = (values, dispatch, props) => {
products.push(values)
}

export default reduxForm({
  form: 'purchase',
  onSubmit
})(PurchaseForm)

