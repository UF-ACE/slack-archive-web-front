import {
  Nav,
  Dropdown
} from 'react-bootstrap'


function SideBar(props) {
  const channelLinks = props.channels.map((channel, key) => {
    let linkColor = channel == props.activePage ? 
      `active-item-text-${props.theme}` : `text-color-${props.theme}`
    let linkRowColor = channel == props.activePage ?
      `active-item-${props.theme}`: `hover-item-${props.theme}`
    return (
      <div className={`w-100 ${linkRowColor}`} key={key}>
        <Nav.Link 
          eventKey={channel}
          className={linkColor}
        >
          # {channel}
        </Nav.Link>
      </div>
    )
  })

  const CaretButton = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      className={`d-inline text-color-${props.theme}`}
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ))

  const themeOptions = Object.keys(props.themes).map((theme, index) => (
    <Dropdown.Item 
      key={index}
      className={`text-color-${props.theme}`}
      active={props.themes[theme] === props.theme}
      onClick={() => {
        props.changeTheme(props.themes[theme])
      }}
    >
      {theme}
    </Dropdown.Item>
  ))

  return (
    <>
      <h4 className="pl-2 d-inline">ACE</h4>
      <Dropdown className="d-inline px-2">
        <Dropdown.Toggle as={CaretButton} />

        <Dropdown.Menu alignRight className={`bg-${props.theme}`}>
          <Dropdown.Header className={`text-color-${props.theme}`}>Change Theme</Dropdown.Header>
          {themeOptions}
        </Dropdown.Menu>
      </Dropdown>
      <p className="pl-2 my-1">Channels</p>
      <Nav 
        className="flex-column"
        onSelect={(selectedKey) => { props.changePage(selectedKey) }}
      >
        {channelLinks}
      </Nav>
    </>
  )
}

export default SideBar