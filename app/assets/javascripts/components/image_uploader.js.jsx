
var ImageUploader = React.createClass({
  getInitialState: function() {
    return { file: null, image: null, selected: []};
  },

uploadFile: function(e) { 
  
  var file = this.refs.file.getDOMNode().files[0];
  var reader = new FileReader();
  reader.onload = function() {
    this.setState({ file: reader.result }); 
  }.bind(this);
  reader.readAsDataURL(file);
},

handleSubmit: function(e) {
  e.preventDefault();
  var data = {
    image: { avatar: this.state.file }
  };
  $.ajax({
    type: "POST",
    url: '/images',
    data: data,
    success: function(response) {
      
      this.refs.form.getDOMNode().reset();
      this.setState( { file: null , image: response.avatar.url });
    }.bind(this)
  });
},

handleSelect: function(e) {
  var currentValue = e.target.value;
  var selectedValues = this.state.selected
  var index = selectedValues.indexOf(currentValue)
  if (index === -1) {
    selectedValues.push(currentValue);
  } else {
    selectedValues.splice(index, 1);
  }
  this.setState( { selected: selectedValues})
},

render: function() {
  return (<form ref='form' onSubmit={this.handleSubmit} >
    <input type="file" onChange={this.uploadFile} name="file" ref="file" /><br /> 
    <hr />
    <select onChange={this.handleSelect} >
      <option value={1}>{'Feature 1'}</option>
      <option  value={2}>{'Feature 2'}</option>
    </select>
    <div>
    <p> Selected Values </p>
    <ul>
      {this.state.selected.map(function(feature) {
          return ( <li> {feature} </li>);
        }
        )}
    </ul>
    </div>
    < hr />
    <input type="submit" />
    <br />
    <img src={this.state.image} alt={'Image Goes Here'} />
  </form>);
}
});

$(function() {
  React.render(<ImageUploader />, document.getElementById('upload'))
});