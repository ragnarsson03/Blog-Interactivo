import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation

# Datos de ejemplo para los sectores
sectores = ['Salud', 'Educación', 'Economía', 'Seguridad']
impacto = [70, 80, 60, 75]  # Porcentajes de impacto de la IA en cada sector

# Configuración de la figura
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Configuración de los ejes
ax.set_xlim(0, 100)
ax.set_ylim(0, 100)
ax.set_zlim(0, 100)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Impacto (%)')

# Inicialización de las barras
bars = ax.bar3d([0, 20, 40, 60], [0, 20, 40, 60], [0, 0, 0, 0], 10, 10, impacto, color=['r', 'g', 'b', 'y'])

# Función de actualización para la animación
def update(num):
    for bar, h in zip(bars, impacto):
        bar.set_height(h * (1 + 0.1 * np.sin(num / 10.0)))

# Creación de la animación
ani = FuncAnimation(fig, update, frames=100, interval=50)

# Mostrar la animación
plt.show()