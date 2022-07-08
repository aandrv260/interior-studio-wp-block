<section class="section--team">
    <div class="container">
        <div class="team grid grid--2-cols">
            <?php
            $img_side = 'left';
            if ($attributes['imgSide']) $img_side = $attributes['imgSide'];

            if ($img_side === 'left') { ?>
                <div class="team__img-box">
                    <img class="team__img" src="<?php echo $attributes['imgURL'] ?>" alt="Снимка на Любослава" />
                    <span class="team__member-name"><?php echo $attributes['teamMemberName'] ?></span>
                </div>

                <div class="team__text-box">
                    <div class="team__text-container">
                        <?php echo $content; ?>
                    </div>
                </div>
            <?php } elseif ($img_side === 'right') { ?>
                <div class="team__text-box">
                    <div class="team__text-container">
                        <?php echo $content; ?>
                    </div>
                </div>

                <div class="team__img-box">
                    <img class="team__img" src="<?php echo $attributes['imgURL'] ?>" alt="Снимка на Любослава" />
                    <span class="team__member-name"><?php echo $attributes['teamMemberName'] ?></span>
                </div>


            <?php }
            ?>

        </div>
    </div>
</section>