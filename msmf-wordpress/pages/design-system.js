import ComponentView from '../design-system/ComponentView';
import Button from '../design-system/Button';
import Avatar from '../design-system/Avatar';

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
        <ComponentView title="Button">
          <Button type="button" classes={classes.button}>
            Hello
          </Button>
        </ComponentView>
      </div>
      
    </>
  )
}

export default DesignSystem