'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputForm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputForm(_ref) {
  var field = _ref.field,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['field', 'form']);

  return _react2.default.createElement('span', null);
  return _react2.default.createElement(
    _formInput2.default,
    {
      field: field,
      errorBefore: true,
      isForm: true
    },
    function (_ref2) {
      var setValue = _ref2.setValue,
          getValue = _ref2.getValue,
          getTouched = _ref2.getTouched,
          setNestedError = _ref2.setNestedError;

      return _react2.default.createElement('span', null);
      return _react2.default.cloneElement(form, _extends({}, rest, {
        /* Let the parent form set defaultValues */
        values: getValue(),
        /* Respond to the parent form's dirty submission attempts */
        touched: getTouched(),
        /* Notify the parent of any nestedForm-level errors and values */
        onChange: function onChange(_ref3, props, initial) {
          var values = _ref3.values,
              errors = _ref3.errors;

          errors ? setNestedError(true) : setNestedError(false);
          setValue(values, initial);
        }
      }));
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL2Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybUlucHV0Rm9ybSIsImZpZWxkIiwiZm9ybSIsInJlc3QiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiZ2V0VG91Y2hlZCIsInNldE5lc3RlZEVycm9yIiwiY2xvbmVFbGVtZW50IiwidmFsdWVzIiwidG91Y2hlZCIsIm9uQ2hhbmdlIiwicHJvcHMiLCJpbml0aWFsIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFJd0JBLGE7O0FBSnhCOzs7O0FBRUE7Ozs7Ozs7QUFEQTs7O0FBR2UsU0FBU0EsYUFBVCxPQUFnRDtBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBUEMsSUFBTzs7QUFDN0QsU0FBTywyQ0FBUDtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsYUFBT0YsS0FEVDtBQUVFLHVCQUZGO0FBR0U7QUFIRjtBQUtHLHFCQUFzRDtBQUFBLFVBQXBERyxRQUFvRCxTQUFwREEsUUFBb0Q7QUFBQSxVQUExQ0MsUUFBMEMsU0FBMUNBLFFBQTBDO0FBQUEsVUFBaENDLFVBQWdDLFNBQWhDQSxVQUFnQztBQUFBLFVBQXBCQyxjQUFvQixTQUFwQkEsY0FBb0I7O0FBQ3JELGFBQU8sMkNBQVA7QUFDQSxhQUFPLGdCQUFNQyxZQUFOLENBQW1CTixJQUFuQixlQUNGQyxJQURFO0FBRUw7QUFDQU0sZ0JBQVFKLFVBSEg7QUFJTDtBQUNBSyxpQkFBU0osWUFMSjtBQU1MO0FBQ0FLLGtCQUFVLHlCQUFtQkMsS0FBbkIsRUFBMEJDLE9BQTFCLEVBQXNDO0FBQUEsY0FBcENKLE1BQW9DLFNBQXBDQSxNQUFvQztBQUFBLGNBQTVCSyxNQUE0QixTQUE1QkEsTUFBNEI7O0FBQzlDQSxtQkFBU1AsZUFBZSxJQUFmLENBQVQsR0FBZ0NBLGVBQWUsS0FBZixDQUFoQztBQUNBSCxtQkFBU0ssTUFBVCxFQUFpQkksT0FBakI7QUFDRDtBQVZJLFNBQVA7QUFZRDtBQW5CSCxHQURGO0FBdUJEIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dEZvcm0gKHtmaWVsZCwgZm9ybSwgLi4ucmVzdH0pIHtcbiAgcmV0dXJuIDxzcGFuIC8+XG4gIHJldHVybiAoXG4gICAgPEZvcm1JbnB1dFxuICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgZXJyb3JCZWZvcmVcbiAgICAgIGlzRm9ybVxuICAgID5cbiAgICAgIHsoe3NldFZhbHVlLCBnZXRWYWx1ZSwgZ2V0VG91Y2hlZCwgc2V0TmVzdGVkRXJyb3J9KSA9PiB7XG4gICAgICAgIHJldHVybiA8c3BhbiAvPlxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGZvcm0sIHtcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIC8qIExldCB0aGUgcGFyZW50IGZvcm0gc2V0IGRlZmF1bHRWYWx1ZXMgKi9cbiAgICAgICAgICB2YWx1ZXM6IGdldFZhbHVlKCksXG4gICAgICAgICAgLyogUmVzcG9uZCB0byB0aGUgcGFyZW50IGZvcm0ncyBkaXJ0eSBzdWJtaXNzaW9uIGF0dGVtcHRzICovXG4gICAgICAgICAgdG91Y2hlZDogZ2V0VG91Y2hlZCgpLFxuICAgICAgICAgIC8qIE5vdGlmeSB0aGUgcGFyZW50IG9mIGFueSBuZXN0ZWRGb3JtLWxldmVsIGVycm9ycyBhbmQgdmFsdWVzICovXG4gICAgICAgICAgb25DaGFuZ2U6ICh7dmFsdWVzLCBlcnJvcnN9LCBwcm9wcywgaW5pdGlhbCkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzID8gc2V0TmVzdGVkRXJyb3IodHJ1ZSkgOiBzZXROZXN0ZWRFcnJvcihmYWxzZSlcbiAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlcywgaW5pdGlhbClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9fVxuICAgIDwvRm9ybUlucHV0PlxuICApXG59XG4iXX0=