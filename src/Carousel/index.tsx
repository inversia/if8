import React, { useRef, useState, useCallback } from 'react'
import './index.css'
import classname from 'classnames'
import { number } from 'prop-types'

export default function Carousel ({ children = [] as React.ReactNode[], pagination = true, itemAmount = true }) {

	const [currentItem, setCurrentItem] = useState (0)
	const scrollerContainer = useRef<HTMLDivElement> ()

	const onScroll = useCallback (

		(event: React.UIEvent) => {
			const el = event.target as Element
			const elementWidth = el.scrollWidth
			const numChildren = el.childElementCount
			const itemWidth = elementWidth / numChildren
			const itemPosition = Math.round (el.scrollLeft / itemWidth)

			setCurrentItem (itemPosition)
		},

		[setCurrentItem]
	)

	const dotClicked = useCallback ((i: number) => {
    const { current: el } = scrollerContainer

    el.scrollTo ({
		left: i * (el.scrollWidth / el.childElementCount),
		behavior: 'smooth'
    })
  }, [])

	return (
		<div className="carousel">
			{ itemAmount && <button className="back" onClick={() => dotClicked (currentItem - 1)}></button> }
			<div
				className="carousel-scroller"
				onScroll={onScroll}
				ref={scrollerContainer}
			>
				{children.map ((x, i) => (
					<div className="carousel-item" key={i}>
						{x}
					</div>
				))}
			</div>
			{ itemAmount && <button className="forward" onClick={() => dotClicked (currentItem + 1)}></button> }
			{ pagination && <div className="carousel-pagination">
				{children.map ((_, i) => (
					<div
						className={classname ('carousel-page-btn', {
						active: i === currentItem
					})}
					key={i}
					onClick={() => dotClicked (i)}
					/>
				))}
			</div>}
		</div>
	)
}
