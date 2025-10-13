// ===============================
// 📜 script.js — Pollería El Sabrosito
// ===============================

// --- 🌐 Scroll suave al hacer clic en el menú ---
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const seccion = document.querySelector(enlace.getAttribute('href'));
    if (seccion) {
      window.scrollTo({
        top: seccion.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// --- ✅ Validación del formulario de contacto ---
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

    if (!nombre || !email || !mensaje) {
      e.preventDefault();
      alert('Por favor completa todos los campos antes de enviar.');
    } else {
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
    }
  });
}

// --- 💬 Botón flotante de WhatsApp ---
const whatsappBtn = document.createElement('a');
whatsappBtn.href = "https://wa.me/921584279?text=Hola%20Pollería%20El%20Sabrosito%2C%20quiero%20hacer%20un%20pedido!";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "";
whatsappBtn.title = "Chatea con nosotros";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25D366";
whatsappBtn.style.color = "white";
whatsappBtn.style.fontSize = "24px";
whatsappBtn.style.width = "50px";
whatsappBtn.style.height = "50px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.display = "flex";
whatsappBtn.style.alignItems = "center";
whatsappBtn.style.justifyContent = "center";
whatsappBtn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
whatsappBtn.style.textDecoration = "none";
whatsappBtn.style.transition = "transform 0.3s";
whatsappBtn.addEventListener('mouseover', () => whatsappBtn.style.transform = "scale(1.1)");
whatsappBtn.addEventListener('mouseout', () => whatsappBtn.style.transform = "scale(1)");

document.body.appendChild(whatsappBtn);

// --- 🌟 Animación al aparecer secciones (efecto scroll reveal simple) ---
const secciones = document.querySelectorAll('section');
const mostrarAlHacerScroll = () => {
  const scrollY = window.scrollY + window.innerHeight - 100;
  secciones.forEach(sec => {
    if (scrollY > sec.offsetTop) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
};

secciones.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', mostrarAlHacerScroll);
mostrarAlHacerScroll(); // ejecutar al cargar
