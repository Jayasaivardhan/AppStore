// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <li className="blo">
      <img alt={appName} className="image" src={imageUrl} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
