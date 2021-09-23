class Op:
    def __init__(self, id, properties):
        self.id = id
        self.mixEffectBlockIndex = 0
        self.properties = properties

    def __str__(self):
        prefix = '<Op id="{0}" mixEffectBlockIndex="0"'.format(self.id)

        properties = ''
        for key, value in sorted(self.properties.items(), key=lambda item: item[0]):
            properties += ' {0}="{1}"'.format(key, value)

        return prefix + properties + ' />'

def op_of(op):
    return Op(op.id, dict(op.properties))

def gen_sleep(frames):
    return Op("MacroSleep", {"frames": frames})

def animate(op, prop, to_value, steps, pause_frames):
    ops = []

    dist = to_value - op.properties[prop]
    step = dist / steps
    
    for i in range(0, steps):
        op = op_of(op)
        op.properties[prop] += step
        ops.append(op)
        if pause_frames > 0:
            ops.append(gen_sleep(pause_frames))

    return ops

def animate_many(ops, props, to_values, steps, pause_frames):
    anims = []
    for i in range(0, len(ops)):
        op_anim = animate(ops[i], props[i], to_values[i], steps, 0)
        anims.append(op_anim)

    interlaced = []
    for i in range(0, steps):
        for k in range(0, len(anims)):
            interlaced.append(anims[k][i])
        interlaced.append(gen_sleep(pause_frames))

    return interlaced

         
xpos = Op("DVEAndFlyKeyXPosition", {"keyIndex": 0, "xPosition": 0})
ypos = Op("DVEAndFlyKeyYPosition", {"keyIndex": 0, "yPosition": 0})   
xsize = Op("DVEAndFlyKeyXSize", {"keyIndex": 0, "xSize": 1})
ysize = Op("DVEAndFlyKeyYSize", {"keyIndex": 0, "ySize": 1})

anim_ops = animate_many(
    [xpos, ypos, xsize, ysize], 
    ["xPosition", "yPosition", "xSize", "ySize"], 
    [13.5, -6.4, 0.41, 0.41], 
    40, 1)

for op in anim_ops:
    print(str(op))


