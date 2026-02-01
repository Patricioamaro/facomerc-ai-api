# FACOMERC AI - SISTEMA DE DASHBOARDS

**Fecha:** Enero 14, 2026  
**Estado:** ✅ Diseño Completado  
**Próximo:** Implementación con n8n + Backend

---

## 📋 RESUMEN

Se han diseñado DOS dashboards completos para Facomerc AI:

| Dashboard | Propósito | Usuario | Archivo |
|-----------|-----------|---------|---------|
| **Cliente Portal** | Clientes ven su proyecto | Clientes | `dashboard-cliente.html` |
| **Facomerc AI OS** | Administración del negocio | Patricio/Equipo | `facomerc-ai-os-admin-dashboard.html` |

---

## 🎨 DASHBOARD DEL CLIENTE

### Secciones Incluidas:

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **📊 Resumen** | Vista general: progreso, fase, días restantes, materiales |
| 2 | **🚀 Mi Proyecto** | Timeline completo de 5 fases con detalles |
| 3 | **📁 Materiales** | Checklist de entregables con alertas de pendientes |
| 4 | **📈 Métricas** | Stats del sitio (disponible post-lanzamiento) |
| 5 | **💬 Chat/Soporte** | Chat en tiempo real con traducción |
| 6 | **📄 Documentos** | Contrato, facturas, suscripción |
| 7 | **⚙️ Configuración** | Datos personales, contraseña, notificaciones |

### Funcionalidades del Chat:

| Botón | Función | Notificación Admin |
|-------|---------|-------------------|
| 📊 Estado | Pregunta automática | Normal |
| 📅 Entrega | Pregunta automática | Normal |
| ✏️ Cambio | Solicita modificación | Normal |
| 🔴 **URGENTE** | Modal especial | ⚡ Prioridad alta + Pushover |
| 👤 **Asistente** | Solicita persona real | 🔔 Notificación especial |

### Características Clave:

- ✅ Timer/countdown de materiales pendientes
- ✅ Mensaje claro: "El tiempo empieza DESPUÉS de entregar materiales"
- ✅ Progress bars visuales
- ✅ 6 idiomas soportados (ES, EN, FR, ZH, PT, KO)
- ✅ Mobile responsive
- ✅ Design system consistente (colores Facomerc)

---

## 🖥️ FACOMERC AI OS (Admin Dashboard)

### Secciones Incluidas:

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **📊 Dashboard** | KPIs, alertas urgentes, tareas, ingresos |
| 2 | **👥 Clientes** | Tabla completa con filtros y estados |
| 3 | **🚀 Proyectos** | Kanban board (coming soon) |
| 4 | **💬 Mensajes** | Inbox con conversaciones priorizadas |
| 5 | **📅 Calendario** | Entregas y deadlines (coming soon) |
| 6 | **💰 Facturación** | Integración Stripe (coming soon) |
| 7 | **📋 Plantillas** | Respuestas rápidas (coming soon) |
| 8 | **⚡ Automatizaciones** | Link a n8n |
| 9 | **📈 Analytics** | Métricas del negocio (coming soon) |
| 10 | **⚙️ Configuración** | Ajustes del sistema |

### Alertas del Dashboard:

| Tipo | Color | Prioridad | Ejemplo |
|------|-------|-----------|---------|
| 🚨 URGENTE | Rojo | Alta | "Mi sitio está caído" |
| 👤 Asistente | Azul | Media-Alta | "Quiero hablar con persona" |
| 💬 Normal | Naranja | Normal | Preguntas regulares |

### KPIs Mostrados:

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│  Clientes   │    MRR      │  Proyectos  │  Mensajes   │  Entregas   │
│   Activos   │             │ En progreso │ Sin responder│ Esta semana │
│      5      │    $545     │      3      │      3      │      2      │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

### Quick Links Integrados:

| Servicio | URL | Propósito |
|----------|-----|-----------|
| ⚡ n8n | n8n.srv1233890.hstgr.cloud | Automatizaciones |
| 💳 Stripe | dashboard.stripe.com | Pagos |
| 🌐 Hostinger | hpanel.hostinger.com | Hosting |
| 📊 Sheets | Google Sheets | Base de datos |

### Tabla de Clientes:

Columnas:
- Cliente (nombre, email, icono)
- Plan (Starter/Business/Pro)
- Estado (En desarrollo, Completado, etc.)
- Progreso (barra visual + %)
- Materiales (X/5)
- MRR ($)
- Acciones

### Inbox de Mensajes:

Priorización visual por colores:
- 🔴 Rojo = URGENTE
- 🔵 Azul = Solicitud de asistente
- 🟠 Naranja = Mensaje nuevo
- ⚪ Gris = Leído/respondido

---

## 🔧 STACK TÉCNICO

### Frontend:
- HTML5 + Tailwind CSS
- JavaScript vanilla
- Responsive design
- Dark mode (único)

### Backend (por implementar):
- n8n webhooks
- Google Sheets como DB
- Stripe API
- Gemini API (traducción)
- Telegram Bot API

### Integración:
```
Cliente escribe → Dashboard → n8n webhook → Telegram (admin)
       ↑                                          ↓
       └──────────── n8n response ←───────────────┘
```

---

## 📁 ARCHIVOS DEL SISTEMA

```
/proyecto/
├── dashboard-cliente.html          # Portal del cliente
├── facomerc-ai-os-admin-dashboard.html  # Admin dashboard
├── onboarding.html                 # Formulario post-pago
├── login.html                      # Login del cliente
├── chat-component.html             # Componente de chat standalone
└── FACOMERC_AI_DASHBOARD_SYSTEM.md # Esta documentación
```

---

## 🎯 PRÓXIMOS PASOS

### Fase 1 - Backend (Sesión actual):
1. [ ] Crear Google Sheets con estructura de datos
2. [ ] Configurar n8n workflows:
   - Onboarding → Sheets + Telegram
   - Chat cliente → Telegram
   - Respuesta admin → Cliente
   - Password recovery
3. [ ] Conectar Stripe webhooks

### Fase 2 - Deployment:
1. [ ] Subir HTMLs a Hostinger
2. [ ] Configurar dominios:
   - portal.facomercai.com (cliente)
   - os.facomercai.com (admin)
3. [ ] Pruebas end-to-end

### Fase 3 - Mejoras:
1. [ ] Kanban board de proyectos
2. [ ] Calendario de entregas
3. [ ] Dashboard de métricas
4. [ ] Plantillas de respuestas
5. [ ] Integración facturación Stripe

---

## 💡 PRINCIPIOS DE DISEÑO

1. **Simplicidad:** Interfaz limpia, sin elementos innecesarios
2. **Claridad:** El cliente siempre sabe qué está pasando
3. **Priorización:** Alertas urgentes siempre visibles
4. **Consistencia:** Mismo design system en ambos dashboards
5. **Mobile-first:** Funciona perfecto en móvil
6. **Dark mode:** Profesional y moderno

---

## 📝 NOTAS IMPORTANTES

- El diseño del **Cliente Portal** es la referencia para cualquier interfaz de cliente
- El diseño del **Admin OS** es la referencia para herramientas internas
- Ambos usan los mismos colores de marca Facomerc (#FF3B00)
- La estructura de navegación lateral es el estándar
- Los modales de URGENTE y ASISTENTE son obligatorios en cualquier chat

---

**Última actualización:** Enero 14, 2026
**Autor:** Patricio Amaro + Claude AI
