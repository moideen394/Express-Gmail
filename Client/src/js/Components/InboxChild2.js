var React=require("react");
var inboxChild1 = React.createClass({
  save:function()
  {
    var from=this.props.from1;
    var subject=this.props.subject;
    var date=this.props.date;
    var ob={"from":from,"subject":subject,"date":date};
    $.ajax({
     url:'http://localhost:8081/users',
     dataType: 'json',
     async :false,
     type: 'POST',
     data:ob,
     success: function(data)
     {
     console.log("save"+JSON.stringify(data));
   }.bind(this),
   error: function(xhr, status, err) {
     console.log(err);
   }.bind(this)
});

},
get:function()
{
  var from=this.props.from1;
  var subject=this.props.subject;
  var date=this.props.date;
  var ob={"from":from,"subject":subject,"date":date};
  $.ajax({
   url:'http://localhost:8081/users',
   dataType: 'json',
   async :false,
   type: 'GET',
   data:ob,
   success: function(data)
   {
   console.log("save"+JSON.stringify(data));
 }.bind(this),
 error: function(xhr, status, err) {
   console.log(err);
 }.bind(this)
});

},

del:function()
{
  var from=this.props.from1;
  var subject=this.props.subject;
  var date=this.props.date;
  var ob={"from":from,"subject":subject,"date":date};
  $.ajax({
   url:'http://localhost:8081/users',
   dataType: 'json',
   async :false,
   type: 'DELETE',
   data:ob,
   success: function(data)
   {
   console.log("save"+JSON.stringify(data));
 }.bind(this),
 error: function(xhr, status, err) {
   console.log(err);
 }.bind(this)
});

},

 render: function() {
return (
  <tr>
    <td>{this.props.from1}</td>
    <td>{this.props.subject}</td>
    <td>{this.props.date}</td>
    <td><a id="labelclick" onClick={this.save} className="btn btn-primary">save</a></td>
      <td><a id="labelclick" onClick={this.get} className="btn btn-primary">Get</a></td>
      <td><a id="labelclick" onClick={this.del} className="btn btn-primary">Del</a></td>
  </tr>
);
}
});


module.exports=inboxChild1;
