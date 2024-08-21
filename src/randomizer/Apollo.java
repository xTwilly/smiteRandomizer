package randomizer;

public class Apollo extends godClass{ 
    public Apollo() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Apollo test = new Apollo();
    System.out.println(test.getDamageType());
    }
}
