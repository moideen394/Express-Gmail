var React=require("react");
var Inboxc=require("./InboxChild2.js");
var inboxChild = React.createClass({
  render: function() {

    var rows=[];

    this.props.allData.forEach(function(data) {


      var from1 =data[0].value;
      var subject=data[1].value;
      var date=data[2].value;

      rows.push(<Inboxc from1={from1}  subject={subject}  date={date} />);
      //rows.push(<td><a id="labelclick" onClick={this.save} className="btn btn-primary">save</a></td>);


    });


    return (

      <div className="panel-body">
      <table className="table table-bordered table-inverse pull-right" >
      <tbody>{rows} </tbody>
      </table>
      </div>

    );
  }
});


module.exports=inboxChild;
