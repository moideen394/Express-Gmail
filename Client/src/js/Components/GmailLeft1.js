var React=require("react");

var GmailLeft1= React.createClass({
  handleLabelId: function()
  {
  //  console.log(this.props.data.id);
    this.props.submitLabelId({lableId:this.props.data.id});
  },
  render: function() {
    return (
     <tr className="btn-primary">
      <td ><a onClick={this.handleLabelId} className="btn btn-primary">{this.props.data.name}</a></td>

      </tr>
    );
  }
});
module.exports=GmailLeft1;
