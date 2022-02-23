import React from 'react'

const Menu = () => {
  return (
    {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
  )
}

export default Menu