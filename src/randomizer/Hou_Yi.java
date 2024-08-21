package randomizer;

public class Hou_Yi extends godClass{ 
    public Hou_Yi() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Hou_Yi test = new Hou_Yi();
    System.out.println(test.getDamageType());
    }
}
