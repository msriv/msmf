import ComponentView from '../design-system/ComponentView';
import Button from '../design-system/Button';
import Avatar from '../design-system/Avatar';
import TextField from '../design-system/TextField';

const DesignSystem = () => {

  const classes = {
    button: {
      // root: "bg-red-500 px-5"
      hover: "hover:bg-blue-500"
    }
  }

  return (
    <>
      <p>
        This page is to show the rendered Design System Components.
      </p> 
      <div className="grid grid-cols-3">
        <ComponentView title="Button">
          <Button type="button" classes={classes.button}>
            Hello
          </Button>
        </ComponentView>
        <ComponentView title="Avatar">
          <Avatar name={"Mihir Srivastava"} />
          <Avatar name={"Nikita Sharma"} />
        </ComponentView>
        <ComponentView title="TextField">
          <TextField type="text" multiline={false}/>
        </ComponentView>
        <ComponentView title="TextArea">
          <TextField type="text" multiline={true}/>
        </ComponentView>
      </div>
      
    </>
  )
}

export default DesignSystem