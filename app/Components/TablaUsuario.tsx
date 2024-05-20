'using client'
import Link from 'next/link'
import React from 'react'

const TablaUsuario = () => {
  return (
    <>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ID Usuario</th>
        <th>Documento</th>
        <th>Correo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
            <Link
            href="/usuario/editar"
            className="btn btn-accent">Editar
            </Link>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default TablaUsuario