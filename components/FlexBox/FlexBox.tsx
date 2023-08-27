import React from "react"
import MiniProgressBar from "components/MiniProgressBar/MiniProgressBar"

export interface FlexCardType {
  title: string;
  description: string;
  color: string;
  textColor: string;
}

export const Card = (props: FlexCardType) => {
  return (
    <div className="w-full flex-1 p-6 text-white" style={{ backgroundColor: props.color, color: props.textColor }}>
      <h1 className="font_header mb-4 text-3xl font-bold">{props.title}</h1>
      <p className="font_desc line-clamp-3 font-[300] tracking-wide">{props.description}</p>
    </div>
  )
}

interface FlexBoxProps {
  data: FlexCardType[];
  elements: any[];
}

const FlexBox = ({data, elements}: FlexBoxProps) => {
  return (
    <>
      <div className="container mx-auto py-12">
        <div className="rounded-lg p-4 pt-12">
          <div className="flex flex-col gap-6 sm:flex-row md:flex-row">
            {Array.isArray(data)
              ? data.map((item: any, index) => (
                  <Card
                    key={index}
                    color={item.color}
                    textColor={item.textColor}
                    title={item.title}
                    description={item.description}
                  />
                ))
              : null}

            {Array.isArray(elements) ? (
              <div className="w-full flex-1">
                {elements.map((item: any, index) => (
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
