import * as React from 'react';
import { Fragment } from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Slide } from '@material-ui/core';
import { useTranslate } from 'react-admin';
import { isArray, get } from 'lodash';

const useStyles = makeStyles(theme => ({
  icon: { minWidth: theme.spacing(5) },
  iconButton: { minWidth: theme.spacing(2) },
  sidebarIsOpen: {
    '& a': {
      paddingLeft: theme.spacing(4),
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
    // '& li': {
    //   paddingLeft: theme.spacing(4.3),
    //   transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    // }
  },
  sidebarIsClosed: {
    '& a': {
      paddingLeft: theme.spacing(2),
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
  },
  backDropRoot: {
    backgroundColor: 'transparent'
  },
  paper: {
    left: '29px',
    top: '30px !important',
    minWidth: '25%',
    minHeight: '50%',
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide
    style={{ inset: '0px', position: 'fixed', display: 'block' }}
    direction="right"
    ref={ref}
    {...props}
  />;
});

const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const SubMenu = props => {
  const {
    handleToggle,
    sidebarIsOpen,
    isOpen,
    name,
    icon,
    children,
    dense
  } = props;

  const translate = useTranslate();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openChildren, setOpenChildren] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleChildren = () => {
    setOpenChildren(!openChildren);
  }

  React.useEffect(() => {
    if (children) {
      const handleClick = get(children, 'props.onClick');
      if (handleClick) {
        setOpen(false);
      }
    }
    if (isArray(children)) {
      children.map(e => {
        const handleClick = get(e, 'props.onClick');
        if (handleClick) {
          setOpen(false);
        }
      })
    }
  }, [children])

  const header = sidebarIsOpen ? (
    <MenuItem dense={dense} button onClick={handleToggle}>
      <ListItemIcon className={classes.icon}>
        {isOpen ? <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {translate(name)}
      </Typography>
    </MenuItem>
  ) : (
      <div>
        <Button
          variant="text"
          style={{ color: 'rgba(0, 0, 0, 0.54)' }}
          onClick={handleClickOpen}
        >
          {icon}
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          BackdropProps={{
            classes: {
              root: classes.backDropRoot
            }
          }}
          classes={{
            paper: classes.paper
          }}
        >
          <DialogTitle onClose={handleClose}>{translate(name)}</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              <Box>
                <MenuItem dense={dense} button onClick={handleToggleChildren}>
                  <ListItemIcon className={classes.icon}>
                    {openChildren ? <ExpandMore /> : icon}
                  </ListItemIcon>
                  {translate(name)}
                </MenuItem>
                <Collapse in={openChildren} timeout="auto" unmountOnExit>
                  <List>
                    {children}
                  </List>
                </Collapse>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div >
    );

  return (
    <Fragment>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
          <Tooltip title={translate(name)} placement="right">
            {header}
          </Tooltip>
        )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {sidebarIsOpen &&
          <List
            dense={dense}
            component="div"
            disablePadding
            className={
              sidebarIsOpen
                ? classes.sidebarIsOpen
                : classes.sidebarIsClosed
            }
          >
            {children}
          </List>
        }
        <Divider />
      </Collapse>
    </Fragment>
  );
};

export default SubMenu;
