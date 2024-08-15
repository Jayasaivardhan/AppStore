// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, selected, changeTab} = props
  const {tabId, displayText} = eachItem
  let v
  if (selected === tabId) {
    v = 'blu'
  } else {
    v = 'lis'
  }
  const click = () => {
    changeTab(tabId)
  }
  return (
    <li className={v} onClick={click} key={tabId}>
      <button type="button" className={`butt ${v}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
