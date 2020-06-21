export default function (context) {
  const { redirect, route } = context
  const {admin} = JSON.parse(localStorage.getItem("fondoSync"))
  if (!admin.currentUser) {
    redirect('/')
  }
}
