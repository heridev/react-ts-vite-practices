import './availableExamples.css';
import { availableRoutes } from '../../routes/availableRoutes.tsx'

const RenderChildrenPath = () => {
  const renderChildrenElements = (elements, outerIndex) => {
    return (
      elements.map((routeDetails, index) => {
        return (
          <div key={index + outerIndex}>
            {
              <a href={routeDetails.path}>{routeDetails.path}</a>
            }
          </div>
        )
      })
    )
  }
  return (
    <div>
      {
        availableRoutes.map((routeDetails, index) => {
          return (
            <div key={index}>
              {
                routeDetails.children ?
                  renderChildrenElements(routeDetails.children, index) : (
                    <a key={routeDetails.id} href={routeDetails.path}>{routeDetails.path}</a>
                  )
              }
            </div>
          )
        })
      }
    </div>
  )
}

const AvailableExamples = () => {
  return (
    <div className="available-examples">
      <h3>Available Examples</h3>
      <div className="component-examples-routes">
        {RenderChildrenPath()}
      </div>
    </div>
  )
}

export default AvailableExamples;
