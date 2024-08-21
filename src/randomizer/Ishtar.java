package randomizer;

public class Ishtar extends godClass{ 
    public Ishtar() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Ishtar test = new Ishtar();
    System.out.println(test.getDamageType());
    }
}
