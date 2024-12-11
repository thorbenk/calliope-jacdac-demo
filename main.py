def on_potentiometer1_position_changed_by():
    global geschwindigkeit, farbe
    geschwindigkeit = modules.potentiometer1.position()
    farbe = 0
modules.potentiometer1.on_position_changed_by(1, on_potentiometer1_position_changed_by)

farbe = 0
geschwindigkeit = 0
while True:
    for Index in range(9):
        modules.led1.set_all(0x000000)
        modules.led1.set_pixel_color(Index, 0x00ffff)
        basic.pause(10 * geschwindigkeit)