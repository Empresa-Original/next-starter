import React from "react"
import MiniProgressBar from "components/MiniProgressBar/MiniProgressBar"

export const Card = ({ item }) => {
  return (
    <div className="w-full flex-1 p-6 text-white" style={{ backgroundColor: item.color, color: item.textColor }}>
      <h1 className="font_header mb-4 text-3xl font-bold">{item.title}</h1>
      <p className="font_desc line-clamp-3 font-[300] tracking-wide">{item.description}</p>
    </div>
  )
}

const FlexBox = ({ data, elements }) => {
  return (
    <>
      <div className="container mx-auto py-12">
        <div className="rounded-lg p-4 pt-12">
          <div className="flex flex-col gap-6 sm:flex-row md:flex-row">
            {data ? data.map((item, index) => <Card key={index} item={item} />) : null}

            {elements ? (
              <div className="w-full flex-1">
                {elements.map((item, index) => (
                  <MiniProgressBar
                    key={index}
                    title={item.title}
                    color={item.color}
                    targetProgress={item.progress}
                    animationDuration={item.animationDuration}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default FlexBox
