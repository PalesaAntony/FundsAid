// import React from 'react'
// import { Field, reduxForm, getFormValues } from 'redux-form'
// import { getProduct } from '../actions/product'
// import { connect } from 'react-redux'




// let ProductForm = props => {

//   return (
//     <form className='column'>
//       <div>
//         <label className='header' htmlFor='productName'>Product Name:</label>
//         <Field name='productName' placeholder="productName" type='text' component="input" />
//       </div>

//       <div>
//         <label className='header' htmlFor='monthlyPremium'>Monthly Premium:</label>
//         <Field name="monthlyPremium" placeholder="monthlyPremium" component="input" type="text" />
//       </div>
//       <div>
//         <label className='header' htmlFor='coverAmount'> Cover Amount:</label>
//         <Field name='coverAmount' placeholder="coverAmount" type='text' component="input" />
//       </div>
//     </form>

//   )
// }
// ProductForm = reduxForm({
//   form: 'product',
//   enableReinitialize: true
// })(ProductForm)

// const mapStateToProps = (state) => {
//   console.log("product details are there", state.product)
//   return {
//     values: getFormValues(ProductForm)(state.product),
//     initialValues: state.product
//   };
// }
// const CProductForm = connect(mapStateToProps)(ProductForm)
// export default CProductForm