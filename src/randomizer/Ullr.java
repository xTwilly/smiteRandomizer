package randomizer;

public class Ullr extends godClass{ 
    public Ullr() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Ullr test = new Ullr();
    System.out.println(test.getDamageType());
    }
}
