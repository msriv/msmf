import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { prepareData } from "./tableUtils";


const TableBuilder = (props) => {
  const {
    data
  } = props;

  const updateData = () => {
    prepareData(data)
  }

  useEffect(() => {
    updateData()
  }, [data])

  return(
    <>
    </>
  )
}

export default TableBuilder